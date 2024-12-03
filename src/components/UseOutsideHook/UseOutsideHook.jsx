import React, { useRef, useState } from 'react'
import useOutside from './UseOutside'

const UseOutsideHook = () => {
  const [showContent,setShowContent]=useState(false)
  const ref=useRef()
  useOutside(ref,()=>setShowContent(false))
 


  return (
    <div className='text-center flex flex-col justify-center items-center '  >
     {
        showContent 
        ? ( 
            <div 
            className='mt-5 border w-[500px] p-4' 
            ref={ref}>
              <h1 className='text-2xl font-bold mb-5'>This is a random content</h1>
              <p>Master React by building 25 different projects. If you follow along, you'll be ready to interview for a job as a React developer.
              </p>
            </div>
          )       
        :(
          <button 
            onClick={()=>setShowContent(true)}
            className='text-white bg-slate-500 p-2 rounded'>Show Content</button>
          )
      }
      
      
    </div>
  )
}

export default UseOutsideHook
