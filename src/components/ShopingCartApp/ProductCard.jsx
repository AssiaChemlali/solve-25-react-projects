import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='border border-orange-500 border-2 p-4 rounded-xl'>
                <img src={product.thumbnail} alt="" className='border'/>
                <h4 className='font-semibold my-3'>{product.title}</h4>
                <button className='bg-orange-500 px-5 py-2 text-white rounded-xl font-semibold cursor-pointer'>Add to cart </button>
              </div>
  )
}

export default ProductCard
