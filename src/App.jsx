import { useState } from 'react'

import './App.css'

import StarRating from './components/StarRating/StarRating'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import Accordition from './components/Accordtion/Accordition'
function App() {


  return (
    <>
    {/* <Accordition/> */}
    {/* <ColorGenerator/> */}
      <StarRating nbOfStars={10}/>
    
    </>
  )
}

export default App
