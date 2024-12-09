import React from 'react'

const Display = ({type,transaction}) => {
  return (
    <ul>
    <li className='font-bold mb-2'>{type}  :</li>
    {
      transaction?.length >0 &&
      transaction?.map((item,index)=>{
        if(item?.type===type){
           return(<li  className={` p-2 rounded capitalize mb-2 ${type==='income'? 'bg-green-200':'bg-blue-200'}`} key={index}> {item.desc} : {item.amout}$</li>)
        }
      })
    }
  </ul>
  )
}

export default Display
