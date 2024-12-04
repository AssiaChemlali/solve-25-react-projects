import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div className="text-center p-3 ">
      <h3 className='capitalize font-bold text-2xl mb-3'>{weather?.city}</h3>
      <p className='font-bold text-sm italic'>{weather?.date}</p>
      <h1 className='text-5xl font-bold py-2 '>{weather?.temp}</h1>
      <p>{weather?.desc}</p>
      <div className='flex flex-row mt-3 justify-between'>
        <p className='flex flex-col font-bold '>
          <span>{weather?.wind}</span>
          <span>Wind speed</span>
        </p>
        <p className='flex flex-col font-bold '>
          <span>{weather?.humidity}%</span>
          <span>Humidity</span>
        </p>
      </div>
  </div>
  )
}

export default WeatherCard
