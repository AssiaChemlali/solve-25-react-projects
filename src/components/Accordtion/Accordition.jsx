import React, { useState ,useEffect} from 'react'
import AccordtionItem from './AccordtionItem'
import {ACCORDITION_ITEMS} from './data'

const Accordition = () => {
 
  const [accordtionItems,setAccorditionItems]=useState(ACCORDITION_ITEMS)
  const [enableMultiSelection ,setEnableMultiSelection]=useState(false)

  function handleMultiSelection(){
    setEnableMultiSelection(prevData=>!prevData)
  }

  function handleSelectionAccordition(id){
    setAccorditionItems(prevData=>{
      return  prevData.map((item)=>{
          return item.id===id ? {...item,isOpen:!item.isOpen} : (enableMultiSelection ? item:{...item,isOpen:false}) 
        })
      })
  }

  return (
    <div className='w-full h-full flex items-center flex-col mt-10'>
      <button 
         onClick={handleMultiSelection}
        className='bg-blue-500 text-white font-bold text-xl p-3 capitalize mb-5 rounded'>
        Enable multi-Selection: {enableMultiSelection ? 'true':'false'}
      </button>

      {accordtionItems.map((item)=>{
          return (
            <AccordtionItem key={item.id} item={item} OnSelect={handleSelectionAccordition}/>
          )
        })} 
    </div>
  )
}

export default Accordition
