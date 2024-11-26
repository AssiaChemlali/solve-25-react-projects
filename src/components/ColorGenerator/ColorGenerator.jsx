import React, { useState } from 'react'

const ColorGenerator = () => {
  const [color,setColor]=useState(
    {value:'rgb(0,255,0)',
      type:'RGB Color'})

  const red=Math.floor((Math.random() * 255) + 1);
  const green=Math.floor((Math.random() * 255) + 1);
  const blue=Math.floor((Math.random() * 255) + 1);

  function handleRgbColor(){
    const rgbvalue=`rgb( ${red} , ${green} , ${blue})`
    setColor({value:rgbvalue,type:'RGB Color'})
  }

  function handleHexColor(){
    const hexValue=`#${red.toString(16)+ green.toString(16) +blue.toString(16)}`
    setColor({value:hexValue,type:'Hex Color'})

  }

  

  return (
    <div className={`p-5 w-full h-[100vh] text-center `} style={{backgroundColor:color.value}}>
      <div className='flex flex-row items-center justify-center gap-5 mb-10'>

        <button 
         onClick={handleHexColor} 
        className='bg-black text-white rounded  text-base p-3 '>
          Create Hex Color
        </button>

        <button
         onClick={handleRgbColor}  
        className='bg-black text-white rounded  text-base p-3 '
        >Create RGB Color
        </button>

        <button 
        onClick={ color.type ==="RGB Color" ? handleRgbColor :handleHexColor} 
        className='bg-black text-white rounded  text-base p-3 '>Generate Random Color
        </button>
      </div>

      <h2 className='text-white text-3xl font-bold mb-5'>{color.type}</h2>

      <h1 className='text-white text-4xl font-bold'>{color.value}</h1>

    </div>
  )
}

export default ColorGenerator
