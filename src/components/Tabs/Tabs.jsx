import React, { useState } from 'react'

const Tabs = ({ tabs }) => {
  const [tabIndex, setTabsIndex] = useState(0)

  function handleSelectedTab(index) {
    setTabsIndex(index)
  }

  return (
    <div className='p-10 flex justify-center items-center'>
      <div className='w-[500px]'>
        <ul className='flex flex-row '>
          {tabs.map((tab, index) => {
            return (
              <li
                onClick={() => handleSelectedTab(index)}
                key={tab.id}
                className={`px-5 py-2 text-white font-bold  capitalize ${tabIndex === index ? 'bg-red-400' : 'bg-black'}`}>
                {tab.label}
              </li>
            )
          })}
        </ul>
        <div className='border p-3'>
          {tabs[tabIndex] && tabs[tabIndex].content}
        </div>

      </div>

    </div>
  )
}

export default Tabs
