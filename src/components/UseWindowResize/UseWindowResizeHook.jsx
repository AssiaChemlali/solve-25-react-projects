import React from 'react'
import useResize from './UseResize'

const UseWindowResizeHook = () => {
  const {width,height}=useResize()

  return (
    <div className='p-10 text-center '>
      <h1 className='text-2xl font-bold'>Use window resize hook</h1>
      <p> width:{width}</p>
      <p>height: {height}</p>
    </div>
  )
}

export default UseWindowResizeHook
