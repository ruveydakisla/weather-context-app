import React from 'react';
import { useWeather } from '../context/WeatherContext';
import Card from './Card';
function Images() {
  const { data } = useWeather(); // Değişken adını data olarak güncelledik
  console.log(data);
  return (
    <div>
            <h1 className='cityText'>{localStorage.getItem('city')}</h1>
            <div className='Container'>
              <Card day={data.list[0].dt_txt} temp={data.list[0].main.temp} durum={data.list[0].weather[0].description}/>
              <Card day={data.list[8].dt_txt} temp={data.list[8].main.temp} durum={data.list[8].weather[0].description}/>
              <Card day={data.list[16].dt_txt} temp={data.list[16].main.temp } durum={data.list[16].weather[0].description}/>
              <Card day={data.list[24].dt_txt} temp={data.list[24].main.temp}durum={data.list[24].weather[0].description}/>
              <Card day={data.list[32].dt_txt} temp={data.list[32].main.temp}durum={data.list[32].weather[0].description}/>
              
            </div>
    </div>
  )
}

export default Images;