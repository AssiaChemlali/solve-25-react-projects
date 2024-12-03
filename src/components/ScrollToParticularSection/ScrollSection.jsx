import React, { useRef } from 'react'

const ScrollSection = () => {
  const ref=useRef()
  const data=[
    {
      label:"first section",
      bg:"bg-red-500"
    },
    {
      label:"second section",
      bg:"bg-yellow-500"
    },
    {
      label:"third section",
      bg:"bg-green-500"
    },
    {
      label:"fourth section",
      bg:"bg-blue-500"
    },
    {
      label:"fiveth section",
      bg:"bg-orange-500"
    },
  ]
  function handleScrollClick(){
    const position=ref.current.getBoundingClientRect().top
   
    window.scrollTo({
      top:position,
      behavior: 'smooth'
    })
    

  }

  return (
    <div className='text-center py-10'>
      <h1 className='text-xl font-bold'>Scroll to a particular section</h1>

      <button 
      className='bg-black text-white p-2 mt-3 rounded capitalize'
      onClick={handleScrollClick}>Click to scroll</button>

        
      {data.map((section,index)=>{
        return(
          <section
              key={index} 
              ref={index===3 ? ref:null}
              className={`${section.bg} h-[700px]  mt-5`}>
              
            <h1 className='text-xl font-bold p-2 capitalize'>{section.label}</h1>
          </section>
        )
      })}
      

     
      
    </div>
  )
}

export default ScrollSection
