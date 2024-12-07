
import './App.css'
import StarRating from './components/StarRating/StarRating'
import ColorGenerator from './components/ColorGenerator/ColorGenerator'
import Accordition from './components/Accordtion/Accordition'
import ImageSlider from './components/ImageSlider/ImageSlider'
import LoadMore from './components/LoadMoreProduct/LoadMore'
import TreeView from './components/TreeView/TreeView'
import RqCodeGenerator from './components/RqCodeGenerator/RqCodeGenerator'
import SwitchTheme from './components/SwitchTheme/SwitchTheme'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
import Tabs from './components/Tabs/Tabs'
import MainTabs from './components/Tabs/MainTabs'
import ModalPopup from './components/ModalPopup/ModalPopup'
import GithubProfile from './components/GithubProfileFinder/GithubProfile'
import SearchAutocomplete from './components/SearchAutocomplete/SearchAutocomplete'
import TicTacToe from './components/TicTacToe/TicTacToe'
import FeatureFlag from './components/FeatureFlag/FeatureFlag'
import UseFetchHook from './components/UseFetchhook/UseFetchHook'
import UseOutsideHook from './components/UseOutsideHook/UseOutsideHook'
import UseWindowResizeHook from './components/UseWindowResize/UseWindowResizeHook'
import ScrollTopBottom from './components/ScrollTopBottom/ScrollTopBottom'
import ScrollSection from './components/ScrollToParticularSection/ScrollSection'
import Weather from './components/WheatherApp/Weather'

import FoodApp from './components/FoodRecipe/FoodApp'
import ShoppingApp from './components/ShopingCartApp/ShoppingApp'
import store from './components/ShopingCartApp/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/ShopingCartApp/Navbar'
import Cart from './components/ShopingCartApp/Cart'
import TrackerApp from './components/TrackerApp/TrackerApp'
function App() {

  return (
<>
      {/* <Accordition/> */}
      {/* <ColorGenerator/> */}
      {/* <StarRating nbOfStars={10}/> */}
      {/* <ImageSlider nbOfImages={10}/> */}
      {/* <LoadMore limit={100} nbOfProduct={20}/> */}
      {/* <TreeView/> */}
      {/* <RqCodeGenerator/> */}
      {/* <SwitchTheme/> */}
      {/* <ScrollIndicator/> */}
      {/* <MainTabs/> */}
      {/* <ModalPopup/> */}
      {/* <GithubProfile/> */}
      {/* <SearchAutocomplete/> */}
      {/* <TicTacToe/> */}
      {/* <FeatureFlag/> */}
      {/* <UseFetchHook/> */}
      {/* <UseOutsideHook/> */}
      {/* <UseWindowResizeHook/> */}
      {/* <ScrollTopBottom/> */}
      {/* <ScrollSection/> */}
    {/* <Weather/> */}
    {/* <FoodApp/> */}


    {/* <Provider store={store}>
      <BrowserRouter>
          <div className='p-10 container'>
              <Navbar/>
              <Routes>
                <Route path="/" element={<ShoppingApp/>}/>
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    </Provider> */}
    <TrackerApp/>
  


           </>
  )
}

export default App
