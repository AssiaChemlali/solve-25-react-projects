import React from 'react'
import { Link } from "react-router-dom";
const RecipeCard = ({ item, type }) => {

  return (
    <div className='shadow-lg drop-shadow  p-5 rounded-xl overflow-hidden '
      key={item?.id}>
      <img src={item?.image} alt="" className='object-cover rounded-xl' />
      <p className='mt-4'>{item?.mealType[0]}</p>
      <h2 className='text-xl font-bold my-3'>{item?.name}</h2>

      <Link to={`/recipeDetails/${item.id}&${type}`} className='bg-black text-sm text-white px-3 p-1 rounded uppercase'>Recipe Details</Link>

    </div>
  )
}

export default RecipeCard
