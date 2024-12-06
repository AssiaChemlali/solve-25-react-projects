import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const RecipeDetails = ({favorites,onAdd}) => {
  const[recipe,setRecipe]=useState()
  const params=useParams()
  const id=params?.id

  useEffect(()=>{

   async function fetchRecipe(){
      try {
        const url= `https://dummyjson.com/recipes/${id}`
        const response= await fetch(url)
        const data=await response.json()
        if(data){
            setRecipe(data)
        }
      } catch (error) {
        
      }
    }
    fetchRecipe()
  
  },[params])


  function handleAddRecipteToFavorites(){
      onAdd(recipe)
  }
 

  return (
    <div className='border p-10 flex'>
      {
        recipe && (
          <>
            <div>
              <img 
              src={recipe?.image} 
              alt="" 
              className='w-[200px] ' />
            </div>

            <div className='px-4'>
              <span className='font-bold text-blue-500 '>{recipe?.mealType[0]}</span>
              <h3 className='text-xl font-bold'>{recipe?.name}</h3>
                  
                <button 
                  onClick={handleAddRecipteToFavorites}
                  className='text-sm my-3 bg-black text-white rounded p-2 capitalize'>
                  {
                  favorites && favorites.length && favorites?.findIndex((item)=>item.id===recipe.id)!== -1 
                   ? 'Remove from favorites'
                   :'Add to favorites'
                  }
               
                </button>

                <ul>
                  <li className='font-bold'>Ingredients:</li>
                  {recipe?.ingredients?.map((ing,index)=>{
                    return (<li key={index}> - {ing}</li> )
                  })}
                </ul>
            </div>
          </>
        )
      }
        
    </div>
  )
}

export default RecipeDetails
