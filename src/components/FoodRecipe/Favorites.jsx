import React from 'react'
import RecipeCard from './RecipeCard'

const Favorites = ({favorites}) => {

  return (
    <div className='mt-10 grid gap-4 sm:grid-cols-3'>
    {
      favorites.length >0 &&
      favorites?.map((item)=>{
          return(
            <RecipeCard item={item} key={item.id} />
          )
        })
    }
  </div>
  )
}

export default Favorites
