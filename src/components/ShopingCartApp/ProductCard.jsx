import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addProduct,removeProduct } from './store/CartSlice'

const ProductCard = ({product}) => {

  const dispatch=useDispatch()
  const carts=useSelector(state=>state.cart)

  function handleAddToCart(){
      const index= carts.findIndex((item)=>item.id===product.id)

      if(index===-1){
        console.log("add")
        dispatch(addProduct(product))
      }else{
        console.log("remove")
        dispatch(removeProduct(product.id))
     
      }

      
    }

   
  return (
    <div className='border border-orange-500 border-2 p-4 rounded-xl text-center'>
        <img src={product.thumbnail} alt="" className='border'/>
        <h4 className='font-semibold my-3'>{product.title}</h4>
        <button 
            onClick={handleAddToCart}
            className='bg-orange-500 px-5 py-2 text-white rounded-xl font-semibold cursor-pointer capitalize'>

          {carts.findIndex((item)=>item.id===product.id) === -1 
          ? ' Add to cart'
          :'remove from cart'
          }
          
          
          </button>
    </div>
  )
}

export default ProductCard
