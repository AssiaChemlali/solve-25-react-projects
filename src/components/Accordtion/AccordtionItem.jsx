import React from 'react'

const AccordtionItem = ({item,OnSelect}) => {

  return (
    
    <div  key={item.id} className='w-[600px] bg-black text-white py-4 px-5 mb-5'>
    <button className='w-full text-white font-bold text-xl  capitalize mb-3 flex justify-between'>
      <span >{item.title} </span>
      <span className='text-white ml-auto' onClick={()=>OnSelect(item.id)}> + </span>
    </button>

    <div className={`${item.isOpen ? 'block':'hidden'}`}>
        <p>{item.description}</p>
    </div>

  </div>
  )
}

export default AccordtionItem
