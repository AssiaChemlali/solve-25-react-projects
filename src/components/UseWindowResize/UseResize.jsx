import React ,{ useLayoutEffect, useState}from 'react'

const useResize = () => {
  const [width,setWidth]=useState(0)
  const [height,setHeight]=useState(0)

  function HandleResize(){
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
  }

 
  useLayoutEffect(()=>{
    HandleResize()
    window.addEventListener('resize',HandleResize)
    return ()=>{
        window.removeEventListener('resize',HandleResize)
    }
  },[])

  return {width,height}
}

export default useResize
