import React, { forwardRef, useRef, useState } from 'react'

const Modal = forwardRef(({onAddTransition},ref) => {

  const refDesc=useRef()
  const refAmout=useRef()
  const refIncome=useRef()
  const refExpense=useRef()

  function handleClose(){
    ref.current.close()
  }
  
  function handleAdd(){
      const desc=refDesc.current.value
      const amout=parseInt(refAmout.current.value)
      let type;

      if(refIncome.current.checked){
          type="income"
      }
      if(refExpense.current.checked){
          type="expense"
      }

      onAddTransition({desc,amout,type})
      ref.current.close()
  }

  return (
    <>
    <div className='z-50 bg-black opacity-1 w-full '></div>
    <dialog id="" ref={ref} className='bg-white p-4  w-[400px] rounded '>

     <div className='flex mb-5'>
      <h4 className='font-bold capitalize text-xl'>Add new Transaction</h4>
      <span className='ml-auto cursor-pointer' onClick={handleClose}>X</span>
     </div>

     <div className='mb-5'>
        <p className='font-bold mb-1'>Enter Description</p>
        <input 
        ref={refDesc}
        className='p-2 border rounded border-gray-200'
        type="text"  
        placeholder='Enter transcation'/>
     </div>


     <div className=''>
        <p className='font-bold mb-1'>Enter Amount</p>
        <input 
        ref={refAmout}
        className='p-2 border rounded border-gray-200'
        type="number"  
        placeholder='Enter amount'/>
     </div>

     <div className='flex  gap-2 mt-3'>
      <input type="radio" name="type" id="icome" ref={refIncome} />
      <label htmlFor="income">Income</label>
      <input type="radio" name="type" id="expense"  ref={refExpense}/>
      <label htmlFor="expense">Expense</label>
     </div>

     <div className='mt-5 flex  flex-row justify-end gap-3'>
      <button 
      onClick={handleClose}
      className='bg-gray-100 text-black px-3 py-2 capitalize rounded hover:bg-blue-200'>cancel</button>

      <button className='bg-gray-100 text-black px-3 py-2 capitalize rounded hover:bg-blue-200'
      onClick={handleAdd}>add</button>
     </div>
     

    </dialog>
    </>
   
  )
})

export default Modal
