import {createContext,useContext,useState,useEffect} from "react";
import { UseCity } from "./CityContext";
const WeatherContext=createContext();
const api = {
    key: "b466e4b015d21914348539db2a12fad5",
    base: "https://api.openweathermap.org/data/2.5/forecast",
  };

 
export const WeatherProvider=({children})=>{
    const {city}=UseCity(localStorage.getItem('city'));
    const [data,setData]=useState(JSON.parse(localStorage.getItem('hava'))||{});
    const values={
        data,
        setData,
    }
    useEffect(() => {
      fetch(`${api.base}?q=${city}&units=metric&lang=tr&appid=${api.key}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
          localStorage.setItem('hava', JSON.stringify(data));
        })
        .catch((error) => {
          console.error('Hava durumu verileri alınamadı', error);
        });
    }, [city]);
  
    
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
};

export const useWeather=()=>useContext(WeatherContext);
export default WeatherContext;