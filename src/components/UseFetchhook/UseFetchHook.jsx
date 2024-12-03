import React, { useEffect, useState } from 'react'
import useFetch from './UseFetch'

const UseFetchHook = () => {
  const {data,loading,error}=useFetch('https://dummyjson.com/products?limit=20')

  return (
    <div className='p-10 flex flex-col  items-center justify-center '>
      <h1 className='text-2xl font-bold '>Use Fetch Hook</h1>
      {loading && <p className='text-center'>Loading data ...</p>}

      {error && <p>{error}</p>}
      <ul className='mt-5'>
          { data && data.length  && data.map((item)=>{
            return (
              <li className='text-base  ' key={item.id}>{item.title}</li>
            )
          })}
      </ul>
        
    </div>
  )
}

export default UseFetchHook
