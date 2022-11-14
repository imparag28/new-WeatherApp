import { CommentBankSharp } from "@mui/icons-material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SearchIcon from "@mui/icons-material/Search";
import IconSearch from "../icons/search";
export default function DayCard({ data, setDayClick, index }) {
  const { main, icon } = data.weather[0] || {};
  const { day } = data.feels_like || {};

  const getday = (day) => {
    let dt = new Date(day * 10000);
    return dt.toDateString().substring(0, dt.toDateString().indexOf(" "));
  };
  const handleClick = (index) => {
    setDayClick(index);
  };
  return (
    <div
      onClick={() => handleClick(index)}
      className=" mt-3 m-3 w-1/3 bg-white p-7 rounded-lg border border-indigo-600 ransition duration-0 hover:bg-slate-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 hover:shadow-2xl"
    >
      <div className="flex flex-col text-center ">
        <h4 className="font-semibold">{getday(data?.dt)}</h4>
        <div className=" text-center">
          <span className="mr-1 font-mono">{day}°</span>
        </div>
      </div>
      <div className="">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      </div>
      <div className="text-center mt-auto">
        {" "}
        <span className="font-serif">{main}</span>
      </div>
    </div>
  );
}
