import { useState } from 'react'

import './App.css'

import StarRating from './components/StarRating/StarRating'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import Accordition from './components/Accordtion/Accordition'
import ImageSlider from './components/ImageSlider/ImageSlider'
function App() {


  return (
    <>
    {/* <Accordition/> */}
    {/* <ColorGenerator/> */}
      {/* <StarRating nbOfStars={10}/> */}
    <ImageSlider nbOfImages={10}/>
    </>
  )
}

export default App
