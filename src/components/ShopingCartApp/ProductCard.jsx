import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from './store/CartSlice'

const ProductCard = ({ product }) => {

  const dispatch = useDispatch()
  const { cart } = useSelector(state => state)

  function handleCart() {
    const index = cart.findIndex((item) => item.id === product.id)
    if (index === -1) {
      dispatch(addProduct(product))
    } else {
      dispatch(removeProduct(product?.id))

    }


  }


  return (
    <div className='border border-orange-500 border-2 p-4 rounded-xl text-center'>
      <img src={product?.thumbnail} alt="" className='border rounded-xl' />
      <h4 className='font-semibold my-3'>{product?.title}</h4>
      <button
        onClick={handleCart}
        className='bg-orange-500 px-5 py-2 text-white rounded-xl font-semibold cursor-pointer capitalize'>

        {cart.some((item) => item?.id === product?.id)
          ? 'remove from cart'
          : 'Add to cart'
        }


      </button>
    </div>
  )
}

export default ProductCard
