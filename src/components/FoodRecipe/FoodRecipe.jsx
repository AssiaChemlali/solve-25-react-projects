import React from 'react'
import RecipeCard from './RecipeCard'

const FoodRecipe = ({loading,recipts}) => {
  if(loading){
    return <p className='mt-10 text-center text-xl font-bold'>loading data ...</p>
  }
  return (
     <>
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
        <h1 className='text-2xl mt-10 text-center font-bold capitalize'> Nothing to show . please search something</h1> 
        
      
      }
     </>
  )
}

export default FoodRecipe
