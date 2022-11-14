import { useEffect, useState } from "react";

import "./App.css";

import UseAutocomplete from "./components/top-searchBar";
import DayCard from "./components/day-card";
import {
  getForcastForSeaveDays,
  getLocation,
  getLocationByIp,
} from "./api/7-days-forcast";
import { Chart } from "./components/chart";

function App() {
  const [forcast, setForcast] = useState([]);
  const [dayClick, setDayClick] = useState(0);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    getLocationByIp().then((res) => {
      if (res) {
        const { lat, lon } = res.data || {};
        getForcastForSeaveDays(lat, lon).then((res) => {
          setForcast(res?.data?.daily);
        });
      }
    });
  }, []);

  const onClickSearch = () => {
    getLocation(inputText).then((res) => {
      const { lon, lat } = res?.data?.coord;

      getForcastForSeaveDays(lon, lat).then((res) => {
        setForcast(res?.data?.daily);
      });
    });
  };

  const formateData = (timezoneIn) => {
    let dt = new Date(timezoneIn * 1000);
    return dt.toLocaleTimeString();
  };

  return (
    <div className="App">
      <UseAutocomplete
        inputText={inputText}
        setInputText={setInputText}
        onClickSearch={onClickSearch}
      />
      <div className="flex overflow-x-auto mt-10">
        {forcast?.map((item, index) => {
          return (
            <DayCard data={item} setDayClick={setDayClick} index={index} />
          );
        })}
      </div>
      <div>
        <Chart dataSet={forcast[dayClick]} />
      </div>

      <div className="flex m-2">
        <div className="p-4 bg-[#f3fbff] w-1/2 m-1 flex flex-col text-center">
          <span className="font-semibold">Pressure</span>
          <span className="font-mono">{forcast[dayClick]?.pressure} hpa</span>
        </div>
        <div className="p-4 bg-[#f3fbff] w-1/2 m-1 flex flex-col text-center">
          <span className="font-semibold">Humidity</span>
          <span className="font-mono">{forcast[dayClick]?.humidity} %</span>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col m-2">
          <span className="font-semibold">Sunrise</span>
          <span className="font-mono">
            {formateData(forcast[dayClick]?.sunrise)} AM
          </span>
        </div>
        <div className="flex flex-col m-2">
          <span className="font-semibold text-right">Sunset</span>
          <span className="font-mono">
            {formateData(forcast[dayClick]?.sunset)} PM
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
