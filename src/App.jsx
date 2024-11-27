import { useState } from 'react'

import './App.css'

import StarRating from './components/StarRating/StarRating'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import Accordition from './components/Accordtion/Accordition'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMore from './components/LoadMoreProduct/LoadMore'
import TreeView from './components/TreeView/TreeView'
import RqCodeGenerator from './components/RqCodeGenerator'
function App() {


  return (
    <>
    {/* <Accordition/> */}
    {/* <ColorGenerator/> */}
      {/* <StarRating nbOfStars={10}/> */}
    {/* <ImageSlider nbOfImages={10}/> */}
    {/* <LoadMore limit={100} nbOfProduct={20}/> */}
    {/* <TreeView/> */}
    <RqCodeGenerator/>
    </>
  )
}

export default App
