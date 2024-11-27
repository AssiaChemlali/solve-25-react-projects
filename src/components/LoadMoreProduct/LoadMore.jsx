import React, { useEffect, useState } from 'react'
import img from '../../assets/1.jpg'

const LoadMore = ({limit,nbOfProduct}) => {
  const [loading,setLoading]=useState(false)
  const [products,setProducts]=useState([])
  const [nbProducts,setNbProducts]=useState(nbOfProduct)

  async function getProductes() {
      const url = `https://dummyjson.com/products?limit=${limit}`;

      try {
        const response= await fetch(url)
        const data=await response.json()
        setProducts(data.products)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }  
  }

  useEffect(() => {
    getProductes();
   
  }, []);

  function handleLoadMore(){
    setNbProducts(prevData=>prevData+nbOfProduct)
  }
  console.log(limit,nbProducts)
  return (
    <div className='p-10 text-center '>
       <ul className='flex flex-wrap items-center mb-4 text-center '>
            {products.length >0 && (
              products.slice(0, nbProducts).map((product)=>{
                return(
                  <li className='border border-black p-5 w-1/4 flex flex-wrap justify-center' key={product.id}>
                    <img src={product.thumbnail} alt="" className='w-[300px] h-[300px] object-contain'/>
                    <p className='font-bold mt-2'>{product.title}</p>
                  </li>
                )
              })
            )}
       </ul>

       {products.length===0 && <p className='text-center mb-4'>Loading data ....</p>}

       <button
       onClick={handleLoadMore} 
       disabled={ nbProducts>=limit}
       className="bg-black text-white p-3 rounded ">Load More Products</button>

       {
        nbProducts>=limit && 
        <p className='text-center mb-4'>you have reached to {limit} products </p>
       }
    </div>
  )
}

export default LoadMore
