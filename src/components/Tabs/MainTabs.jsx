import React from 'react'
import Tabs from './Tabs'

function CustomTab() {
  return (
    <div className='font-bold text-red-400'>
      it's a custom tab
    </div>
  )
}
const MainTabs = () => {

  const tabs = [
    {
      id: 'tab1',
      label: "tab1",
      content: <div>To determine the height of a scrolling section in React, you can use the ref property to access the DOM element and retrieve its scrollHeight property.</div>
    },
    {
      id: 'tab2',
      label: "tab2",
      content: <div className='text-2xl'>determine the height of a scrolling section in React, you can use the ref property to access the DOM element and retrieve its scrollHeight property. Here'</div>
    },
    {
      id: 'tab3',
      label: "tab3",
      content: <CustomTab />
    },
  ]
  return (
    <Tabs tabs={tabs} />
  )
}

export default MainTabs

