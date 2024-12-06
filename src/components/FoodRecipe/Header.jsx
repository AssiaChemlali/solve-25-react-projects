import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({onSearch}) => {
  const ref=useRef()
  const navigate=useNavigate()
  function handleKeyPress(e){
    
    if(e.key==="Enter"){
        onSearch(ref.current.value)
         navigate('/')
    }
  
  }
  return (
   
    <header className="flex items-center font-serif mb-4 container">
      <Link to="." className="font-semibold">FoodRecipe</Link>
      <div className='ml-auto mr-auto'>
        <input 
        type="text" 
        className='px-4  py-3 shadow-lg drop-shadow-sm rounded-lg border-b border-red-300'
        placeholder='Enter Recipe'
        name="food"
        ref={ref}
        onKeyDown={handleKeyPress}
        />
      </div>
      <div className='text-sm font-semibold'>
        <Link to="." className='text-black hover:text-red-500 duration-300'>Home</Link>
        <Link to="/favorites" className='text-black hover:text-red-500 duration-300 ml-2'>Favorites</Link>
      </div>
    </header>

   
  )
}

export default Header
