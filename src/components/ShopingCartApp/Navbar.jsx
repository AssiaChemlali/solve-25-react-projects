import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center'>
        <h1 className='text-xl font-bold'>React Redux shopping Cart</h1>
        <ul className='ml-auto flex  gap-3'>
          <li className='capitalize font-semibold text-base text-black hover:text-orange-500 cursor-pointer '>home</li>
          <li className='capitalize font-semibold text-base text-black hover:text-orange-500 cursor-pointer'>cart(0)</li>
        </ul>
      </nav>
  )
}

export default Navbar
