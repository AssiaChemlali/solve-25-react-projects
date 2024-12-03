import React from 'react'
import Accordition from '../Accordtion/Accordition'
import StarRating from '../StarRating/StarRating'
import ColorGenerator from '../ColorGenerator/ColorGenerator'
import ImageSlider from '../ImageSlider/ImageSlider'
import LoadMore from '../LoadMoreProduct/LoadMore'
import TreeView from '../TreeView/TreeView'
import RqCodeGenerator from '../RqCodeGenerator/RqCodeGenerator'
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator'
import Tabs from '../Tabs/Tabs'
import MainTabs from '../Tabs/MainTabs'
import ModalPopup from '../ModalPopup/ModalPopup'
import GithubProfile from '../GithubProfileFinder/GithubProfile'
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete'
import TicTacToe from '../TicTacToe/TicTacToe'

const FeatureFlag = () => {
  const components=[
     {key:'Accordition',component:<Accordition/>,visible:true},
     {key:'ColorGenerator',component:<ColorGenerator/>,visible:false},
     {key:'StarRating',component:<StarRating nbOfStars={10}/>,visible:true},
     {key:'ImageSlider',component:<ImageSlider nbOfImages={10}/>,visible:true},
  ]
   
  
  return (
    <div>
     {components.map((item)=>{
      if(item.visible){
       return  <div key={item.key}>{item.component}</div>
      }
     })}
    </div>
  )
}

export default FeatureFlag
