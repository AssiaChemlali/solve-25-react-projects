import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
// import ProductCard from './productCard'

const ShoppingApp = () => {
  const [products,setProducts]=useState([])
 const [loading,setLoading]=useState(false)



  useEffect(()=>{
    async function getProducts(){
      try {

         setLoading(true)
          const url='https://freetestapi.com/api/v1/products?limit=5'
        const response=await fetch(url)
        const data=await response.json()
       
        if(data){
          setProducts(data)
          console.log(data)
          setLoading(false)
        }
      
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }

  }
    getProducts()
  },[])
  if(loading){
    return <>Loading Data ...</>
  }

// console.log(products)
  return (
    <div className='p-10 container'>
     <Navbar/>

      <div className='grid sm:grid-cols-2  md:grid-cols-3 gap-5 mt-10'>
        {
          (products?.map((product)=>{
            // return (
            // //  <ProductCard product={product} />
            // )
              })) 
             
        }
      </div>
      
    </div>
  )
}

export default ShoppingApp
