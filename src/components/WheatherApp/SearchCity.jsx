import React from 'react'

const SearchCity = ({cityRef,onSearch}) => {
  return (
    <div className="flex gap-x-2">
    <input 
    type="text" 
    name="name" 
    className='p-2 border border-black rounded w-full'
    placeholder='Entrer city name'
    ref={cityRef}
 
    />
    <button 
    className='bg-black text-white py-2 px-3 rounded hover:bg-green-700'
    onClick={onSearch}>Search</button>
  </div>
  )
}

export default SearchCity
