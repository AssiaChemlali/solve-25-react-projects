import React from 'react'
import menus from './data'
import Menu from './menu'
const TreeView = () => {

  return (
    <div className='w-full h-[100vh] flex flex-row'>
      <ul className='bg-blue-500 w-[800px] p-5'>
        <Menu menu={menus}  className="ml-10"/>
      </ul>

      <div className='w-full bg-white'>

      </div>
      
    </div>
  )
}

export default TreeView
