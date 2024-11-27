import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { useRef } from 'react'
const RqCodeGenerator = () => {
  const ref=useRef()
  const [rqCode,setRqCode]=useState('')

  function handleGenerateCode(){
    const refValue=ref.current.value
    setRqCode(refValue)
  ref.current.value=""
  }
  return (
    <div className='text-center p-5 w-[500px] flex flex-col justify-center border items-center '>
      <h1 className='text-black font-bold text-2xl mb-5 '>RQ Code Generator</h1>
      <div className='mb-10'>
        <input 
        type="text" 
        name="qr-code"
        placeholder='Enter your value here'
        className='border px-3 py-2' 
        ref={ref}/>

        <button 
       
        onClick={handleGenerateCode}
        className='px-3 py-2 bg-black text-white'>Generate</button>
      </div>
     
        <QRCode
              value={rqCode}
              id="rggenerator"
              bgColor="#000000"
              fgColor="#ffffff"
              size={400}
              className='border'
        />
     
     
      
    </div>
  )
}

export default RqCodeGenerator
