import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex flex-row mb-10'>
          <h3 className='font-extrabold text-2xl'>
            <Link to="."> Mern Blog App
            </Link>
            </h3>
          <ul className='flex ml-auto gap-3'>
            <Link 
            to="." 
            className='font-bold capitalize hover:text-red-500'>Home</Link>

            <Link 
            to ="/addpost" 
            className='font-bold capitalize hover:text-red-500'>Add blog</Link>
          </ul>
        </nav>
  )
}

export default Navbar
