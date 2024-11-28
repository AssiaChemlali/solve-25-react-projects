import React, { useEffect, useRef, useState } from 'react'

const ScrollIndicator = () => {
  const [products,setProducts]=useState([])
  const [scollY,setScrollY]=useState(0)
  const [loading,setLoading]=useState(true)
  const [errorMessage,setErrorMessage]=useState(false)

    useEffect(()=>{
      async function getData(){
        try {
          const response=await  fetch('https://dummyjson.com/products?limit=100')
        const data=await response.json()
        
        if( data?.products?.length > 0){
          setProducts(data.products)
          setLoading(false)
          setErrorMessage(false)
        }else{
           setLoading(true)
        }
        } catch (error) {
          setErrorMessage(true)
        }
      }
      
      getData()
    },[])



 const handleScroll=()=>{
  const fullPageHeight = document.documentElement.scrollHeight; // Total page height
  const viewportHeight = window.innerHeight; // Visible part of the page
  const scrollPosition = window.scrollY; // Current scroll position from top
  const scrollPercentage = (scrollPosition / (fullPageHeight - viewportHeight)) * 100;
  setScrollY(scrollPercentage)
 }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    return ()=>window.removeEventListener('scrol',()=>{})
  }, []) 


  if(loading){
    return <div className='mt-[200px] text-center'>Loading data ...</div>
  }
  if(errorMessage){
    return <div>Error {errorMessage}</div>
  }
  return (
    <div className='w-full flex  flex-col justify-center ' onScroll={handleScroll}>
      <div  className='fixed top-0 left-0 w-[100%] bg-green-500'>
        <h2 className=' p-4 text-center text-4xl text-white'>Custom Scroll Hooks</h2>
        <progress
          id="bar" 
          value={scollY} 
          max="100"
          className='w-[100%]'
         />
      </div>
   

      <div className='text-center mt-[100px]'>
          {products?.map((item)=>{
            return(<p key={item.id}>{item.title}</p>)
          })}
      </div>
      
    </div>
  )
}

export default ScrollIndicator
