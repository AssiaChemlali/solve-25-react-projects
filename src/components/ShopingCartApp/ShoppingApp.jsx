import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'

const ShoppingApp = () => {
  const [products,setProducts]=useState([])
 const [loading,setLoading]=useState(false)



  useEffect(()=>{
    async function getProducts(){
      try {
        setLoading(true)
        const url='https://dummyjson.com/products?limit=10'
        const response=await fetch(url)
        const data=await response.json()
       
        if(data){
          setProducts(data.products)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
      }

  }
    getProducts()
  },[])

  if(loading){
    return <>Loading Data ...</>
  }

  return (
     <>
      <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-5 mt-10'>
        {
          (products?.map((product)=>{
            return (
              <ProductCard 
              product={product} 
              key={product.id}/>
            )
          })) 
             
        }
      </div>
      
    </>
  )
}

export default ShoppingApp
