import React from 'react'
import RecipeCard from './RecipeCard'

const FoodRecipe = ({recipts}) => {

  return (
     <div className=''>
      { recipts && recipts?.length > 0 
        ? (
          <div className='mt-10 grid gap-4 sm:grid-cols-3'>
            {
              recipts?.map((item)=>{
                  return(
                    <RecipeCard item={item} key={item.id}/>
                  )
                })
            }
          </div>
        ):
        
        <h1 className='text-2xl mt-10 text-center font-bold'> Nothing to show . please search something</h1> 
        
      
      }
     </div>
  )
}

export default FoodRecipe
