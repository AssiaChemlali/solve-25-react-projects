import React from 'react'
import { useSelector } from 'react-redux'
import { removeProduct } from './store/CartSlice'
import { useDispatch } from 'react-redux'
const Cart = () => {
  const dispatch=useDispatch()


  const carts=useSelector(state=>state.cart)
  let totalPrice=0

  carts.map((item)=>{
    totalPrice=totalPrice +item.price
    })



  function handleRemove(id){
    console.log("remove cart")
        dispatch(removeProduct(id))
  }


  return (
    <>
    <div className='mt-10 border p-5'>
      <h2 className='text-bold text-xl text-orange-400 capitalize'>Your cart summary</h2>
      <p className='text-semibold'>Total Items:{carts.length}</p>
      <p className='text-semibold'>Total Amounts:{totalPrice}</p>
    </div>
     
     <div className='grid sm:grid-cols-2  md:grid-cols-4 gap-5 mt-10'>
     {carts.map((cart)=>{
      return(
        <div className='border border-black border-2 p-4 rounded-xl' key={cart.id}>
        <img src={cart.thumbnail} alt="" className='border w-[100px]'/>
        <h4 className='font-semibold my-3'>{cart.title}</h4>
        <h4 className='font-semibold my-3'>{cart.price}</h4>
        <button 
        onClick={()=>handleRemove(cart.id)}
        className='bg-black px-5 py-2 text-white rounded-xl font-semibold cursor-pointer capitalize'>
          remove from cart
    
          </button>
      </div>
      )
     })}
    </div>
    </>
  
  )
}

export default Cart
