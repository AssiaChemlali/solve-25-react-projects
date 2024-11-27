import { useState } from 'react'

import './App.css'

import StarRating from './components/StarRating/StarRating'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import Accordition from './components/Accordtion/Accordition'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMore from './components/LoadMoreProduct/LoadMore'
function App() {


  return (
    <>
    {/* <Accordition/> */}
    {/* <ColorGenerator/> */}
      {/* <StarRating nbOfStars={10}/> */}
    {/* <ImageSlider nbOfImages={10}/> */}
    <LoadMore limit={100} nbOfProduct={20}/>
    </>
  )
}

export default App
