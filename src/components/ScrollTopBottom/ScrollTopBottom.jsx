import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../UseFetchhook/UseFetch'
const ScrollTopBottom = () => {
  
const ref=useRef()

  const {data,loading,error}=useFetch('https://dummyjson.com/products?limit=50')

  function handleScrollToBottom(){
     ref.current.scrollIntoView({behavior: 'smooth'} )
  }

  function handleScrollToTop(){
      window.scrollTo({
        top:0,
        behavior: 'smooth'
      })
  }

    if(loading){
      return <p>loading data</p>
    }

    if(error){
      return <>{error}</>
    }
  return (
    <div className='flex flex-col items-center justify-center p-10'>
      <h1 className='text-2xl font-bold mb-5 capitalize'>scroll to top and bottom featuree</h1>
      <button 
      onClick={handleScrollToBottom}
      className='bg-black text-white p-2 rounded capitalize'>scroll to bottom</button>

       <div className=' py-6'>

             {data && data.length  && data.map((item)=>{
              return (
                <p key={item.id}>{item.title}</p>
              )
             })}
       </div>
  <div ref={ref}></div>
      <button 
      onClick={handleScrollToTop}
      className='bg-black text-white p-2 rounded  capitalize'>scroll to top</button>
    </div>
  )
}

export default ScrollTopBottom
