import React, { useState } from 'react'
import Menu from './menu'
const MenuItem = ({item}) => {
  const [displayItem,setDisplayItem]=useState(false)

  function handleClick (e){
    e.preventDefault();
      setDisplayItem(prevData=>!prevData
      )
  }


  return (
    <li className='text-white font-bold' >
      <a className='flex gap-x-1' href={item.to}>
        {item.label}
        { item?.children?.length>0 
        ? 
        <span onClick={(e)=>handleClick(e)}> 
          {displayItem ? '-':'+'}
        </span>
        :null
       }
      </a>
          { item && item.children &&
          item?.children?.length>0 && displayItem ?
          <Menu menu={item.children}/>:null
          }
    </li>
  )
}

export default MenuItem
