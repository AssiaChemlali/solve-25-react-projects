import React from 'react'
import useLocalStorage from './useLocalStorage'

const SwitchTheme = () => {
const [theme,setTheme]=useLocalStorage("theme","light")

  function handleChangeTheme(){
    window.document.documentElement.classList.remove(theme);
    setTheme(theme==='light'? 'dark':'light') 
  }

 
  return (
    <div data-theme={theme} className={`flex items-center h-[100vh] flex-col p-10 bg-white dark:bg-black ` }  >

      <h1 className={`text-2xl font-bold mb-3 dark:text-white`}>
      Hello World
      </h1>

      <button 
      onClick={handleChangeTheme}

      className={`p-3 text-white bg-black rounded dark:text-black dark:bg-white`}>
        Change theme
      </button>
    </div>
  )
}

export default SwitchTheme
