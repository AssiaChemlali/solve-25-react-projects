import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = ({meals,onAdd,onRemove}) => {
  const[recipe,setRecipe]=useState()
  const[addRecipe,setAddRecipte]=useState(false)
  const params=useParams()

  const id=params?.id?.split('&')[0]
  const type=params?.id?.split('&')[1]

  useEffect(()=>{
    const result=meals?.find((item)=>item.id.toString()===id )
    setRecipe(result)
    if(type==='fav'){
      setAddRecipte(true)
    }
  },[])


  function handleAddRecipteToFavorites(){
      onAdd({...recipe,type:"fav"})
      setAddRecipte(true)  
  }
  function handleRemoveRecipteToFavorites(){
    onRemove(recipe.id)
    setAddRecipte(false)
  
    
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

                <div  className='text-sm my-3 bg-black text-white rounded p-2 capitalize'>
                  {addRecipe 
                  ?  <span onClick={handleRemoveRecipteToFavorites}>Remove from favorites</span>
                  : <span onClick={handleAddRecipteToFavorites}>add to favorites</span>}
                </div>

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
