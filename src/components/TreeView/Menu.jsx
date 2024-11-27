import React from 'react'
import MenuItem from './menuItem'
const Menu = ({menu}) => {

  return (
    <nav className='text-white font-bold capitalize flex flex-col ml-10 gap-2 '>
      {menu.map((menuItem,index)=>{
        return(
          <MenuItem  
          key={index}
          item={menuItem}
          
          />
        )
      })}
          
    </nav>

  )
}

export default Menu
