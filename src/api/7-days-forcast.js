import axios from "axios";

const locationUrl = 'http://ip-api.com/json'
const apiKey = '448c2231899594e33ac760d5e8b91445'
export  const getForcastForSeaveDays = (lat,lon) =>{
    const forCastApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
   return  axios.get(forCastApi)
}

export const getLocationByIp = () =>{
    return axios.get(locationUrl)
}

export const getLocation = (city) =>{
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8`
    return axios.get(url)
}