import Header from './Header'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favorites from './Favorites'
import RecipeDetails from './RecipeDetails'
import FoodRecipe from './FoodRecipe'

const FoodApp = () => {
  const [recipeName, setRecipeName] = useState()
  const [recipts, setRecipets] = useState([])
  const [loading, setLoading] = useState(false)
  const [favorites, setfavorites] = useState([])

  useEffect(() => {
    if (recipeName) {
      fetchRecipes()
    }

  }, [recipeName])

  async function fetchRecipes() {

    try {
      setLoading(true)
      const url = `https://dummyjson.com/recipes/search?q=${recipeName}`
      const response = await fetch(url)
      const data = await response.json()
      if (data.recipes) {
        setRecipets(data.recipes)
        setLoading(false)
      }

    } catch (error) {
      setLoading(false)
    }


  }

  function handleSearchRecipe(recipe) {
    setRecipeName(recipe)
  }

  function handleAddRecipe(reccite) {
    setfavorites(prevdata => {
      return [...prevdata, reccite]
    })
  }

  function handleRemoveRecipe(id) {
    setfavorites(prevdata => {
      const updateFavorites = prevdata.filter((item) => item.id !== id)
      return updateFavorites
    })
  }

  return (
    <BrowserRouter>
      <div className='p-10 '>
        <Header onSearch={handleSearchRecipe} />
        {loading && <p className='mt-10 text-center text-xl font-bold'>loading data ...</p>}


        <Routes>
          <Route
            path="/"
            element={<FoodRecipe recipts={recipts} />} />

          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />} />

          <Route
            path="/recipeDetails/:id"
            element={<RecipeDetails meals={recipts} onAdd={handleAddRecipe} onRemove={handleRemoveRecipe} />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default FoodApp
