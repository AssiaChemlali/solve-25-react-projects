import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ImageSlider = ({nbOfImages}) => {
  const [imageList,setImageList]=useState([])
  const [index,setIndex]=useState(0)

  async function  fetchImages(){
    const url = `https://api.pexels.com/v1/curated?per_page=${nbOfImages}`;
    const apiKey = 'kn1uqHPyx0Ixj1f7TfW5D2FuGaNJmAzjdOgBYZQJIY3r1a4s0lP4Ci0G'; 

    fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setImageList(data.photos)

      })
   }

  useEffect(() => {
    fetchImages()
  }, []);



  function handlePrevious(){
    if(index>0){
      setIndex(index-1)
    } else if(index===0){setIndex(imageList.length-1)}
   
  }

  function handleNext(){
    if(index>=0 && index < imageList.length-1){
      setIndex(index+1)
    } else if(index===imageList.length-1){setIndex(0)}
   
  }


  return (
    <div className='p-10  flex flex-col items-center justify-center'>
      {
        imageList.length!==0  && (
          <>
          <div className='w-[500px] h-[500px]  mb-4'>
          {<img src={imageList[index]?.src?.large} className='w-[500px] h-[500px] object-cover	'/>  }
        </div>
  
        <div className='flex '>
          {
            [...Array(imageList.length)].map((_,i)=>{
              return <button  
              key={i}
              onClick={()=>setIndex(i)}
              className={`w-[15px] h-[15px] bg-gray-500 rounded-full mr-3 hover:bg-red-400 ${index===i ? 'bg-red-400':'bg-gray-500'}`}
              > </button>
            })
          }
        </div>

         <div className='flex gap-10 mt-10'>
          <button onClick={handlePrevious} className='w-[50px] h-[50px] rounded-full border flex items-center justify-center'><FaLongArrowAltLeft /></button>
          <button onClick={handleNext} className='w-[50px] h-[50px] rounded-full border flex items-center justify-center'><FaLongArrowAltRight /></button>
         </div>
         </>
        )
 
      }
      {imageList.length===0 && <>Loading data ...</>}
     
      
    </div>
  )
}

export default ImageSlider
