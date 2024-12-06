import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const carts=useSelector(state=>state.cart)
  return (

    <nav className='flex items-center'>
        <h1 className='text-xl font-bold'>
          <Link to=".">React Redux shopping Cart</Link>
        </h1>
        <ul className='ml-auto flex  gap-3'>
          <Link to="." className='capitalize font-semibold text-base text-black hover:text-orange-500 cursor-pointer '>home</Link>
          <Link 
          to='/cart'
          className='capitalize font-semibold text-base text-black hover:text-orange-500 cursor-pointer'>
            cart({carts?.length})
          </Link>
        </ul>
      </nav>
  )
}

export default Navbar
