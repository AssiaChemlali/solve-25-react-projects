import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { removeProduct } from './store/CartSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const [totalCart, setTotalCart] = useState()
  const { cart } = useSelector(state => state)


  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
    setTotalCart(totalPrice)

  }, [cart])

  function handleRemove(id) {
    dispatch(removeProduct(id))
  }


  return (
    <>

      {
        cart && cart?.length > 0
          ? (<>
            <div className='mt-10 border p-5'>
              <h2 className='text-bold text-xl text-orange-400 capitalize'>Your cart summary</h2>
              <p className='text-semibold'>Total Items:{cart?.length}</p>
              <p className='text-semibold'>Total Amounts:{totalCart}</p>
            </div>

            <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-5 mt-10'>
              {cart?.map((cart) => {
                return (
                  <div className='border border-black border-2 p-4 rounded-xl bg-gray-100' key={cart?.id}>
                    <img src={cart?.thumbnail} alt="" className='border w-[100px]' />
                    <h4 className='font-semibold my-3'>{cart?.title}</h4>
                    <h4 className='font-semibold my-3'>{cart?.price}</h4>
                    <button
                      onClick={() => handleRemove(cart?.id)}
                      className='bg-black px-5 py-2 text-white rounded-xl font-semibold cursor-pointer capitalize'>
                      remove from cart

                    </button>
                  </div>
                )
              })}
            </div>


          </>

          )
          : (<div className='mt-10 text-center'>
            <h3 className='mb-5 capitalize text-2xl font-bold'>Your cart is empthy</h3>
            <Link to="/" className="bg-orange-500 px-5 py-2 text-white rounded-xl font-semibold cursor-pointer capitalize">go to home</Link>
          </div >)
      }

    </>

  )
}

export default Cart
