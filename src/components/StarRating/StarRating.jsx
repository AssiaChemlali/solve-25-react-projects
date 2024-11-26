import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({nbOfStars}) => {
  const [isCliked,setIsClicked]=useState(false)
const [hover,setHover]=useState(0)


  function handleHover(index){
    setHover(index)
    setIsClicked(false)
    
  }

  function handleLeaveHover(){
    if(!isCliked){
       setHover(0)
    }
  }

  function handleClick(index){
    setHover(index)
    setIsClicked(true)
  }

  return (
    <div className='p-5 flex items-center justify-center'>
       <div 
          className='text-4xl flex'>
          {
            [...Array(nbOfStars)].map((_,index)=>{
              index+=1
                return (
                  <FaStar 
                    key={index}
                    onMouseLeave={()=>handleLeaveHover()}
                    onMouseEnter={()=>handleHover(index)}
                    onClick={()=>handleClick(index)}
                    className={hover >=index ?'text-yellow-400':'text-black'}/>
                  )}
                )
          }

        </div>
    </div>
  )
}

export default StarRating
