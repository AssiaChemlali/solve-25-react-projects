import React, { useEffect, useRef, useState } from 'react'
import WeatherCard from './WeatherCard'
import SearchCity from './SearchCity'

const Weather = () => {
    const [city,setCity]=useState('london')
    const [weather,setWeather]=useState(
      {city:'',
        date:getDate(),
        temp:'',
        desc:'',
        wind:'',
        humidity:''

    })
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const cityRef=useRef()

    const apiKey="d7f2ad1e8274b7647269569238c310f5"

    async function getCityData(){
      setLoading(true)
      try {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        const response=await fetch(url)
        const data= await response.json()
       
        if(data ){
          const dataWeather={
            city:data?.name +' , '+ data?.sys?.country,
            date:getDate(),
            temp:data?.main?.temp,
            desc:data?.weather[0]?.description,
            wind:data?.wind?.speed,
            humidity:data?.main?.
            humidity
          }
           setWeather(dataWeather)
           setLoading(false)

        } 
      } catch (error) {
        setLoading(true)
        setError(error.message)
      }
    }


    function handleSearch(){
      const cityname=cityRef.current.value.toLowerCase()
      setCity(cityname)
    }

    useEffect(()=>{
     getCityData()
    },[city])

    function getDate(){
      const todayDate = new Date(); 
      const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(todayDate);
      const fullDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(todayDate);
      const formattedDate = `${dayOfWeek}, ${fullDate}`;
      return formattedDate
    }

  return (
    <div className='p-10 font-serif'>
      <div className="bg-green-300 p-5 rounded w-[500px]">
      <SearchCity cityRef={cityRef} onSearch={handleSearch}/>

        {loading && <p className='text-center mt-3'>Loading data ...</p>}
        {error && <p>{error}</p>}

        {!loading  && !error && weather &&(<WeatherCard weather={weather}/>)}
        

      </div>
      
    </div>
  )
}

export default Weather
