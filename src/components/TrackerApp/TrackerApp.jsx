import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import Chart from './Chart'
import Display from './Display'
import Summary from './Summary'

const TrackerApp = () => {

  const ref=useRef()
  const [transaction,setTransaction]=useState(
    [])
    const[balance,setBalance]=useState(0)
   const [TotalIncome,setTotalIncome]=useState(0)
   const [TotalExpensive,setTotalExpensive]=useState(0)

  function handleClick(){
     ref.current.showModal()
  }


 function addTransition(newTransaction){
    setBalance(newTransaction.amout)
    setTransaction(prevData=>{
      return [...prevData,newTransaction]
    })


    if(newTransaction.type==="income" ){
      const income= TotalIncome + newTransaction.amout 
      setTotalIncome(income)
    }else{
      const expense= TotalExpensive + newTransaction.amout
      setTotalExpensive(expense)
    }
    
 }


  return (
    <div className='p-10 w-full'>
      <div className='flex items-center justify-center mb-10'>
        <h3 className='text-xl font-extrabold'>Expense Tracker</h3>
        <button 
        onClick={handleClick}
        className='bg-blue-500 text-white p-2 ml-auto rounded'>Add New Transaction</button>
      </div>


      <div className='flex flex-row w-full justify-between mb-10 bg-gray-100'>
       
        <Summary 
        TotalExpensive={TotalExpensive} 
        balance={balance}
        TotalIncome={TotalIncome}
        />

        <Chart 
        TotalExpensive={TotalExpensive} 
        TotalIncome={TotalIncome}/>
      </div>

      <div className='flex flex-row w-full justify-between bg-gray-100 p-4 rounded'>
        <Display type="income" transaction={transaction}/>
        <Display type="expense" transaction={transaction}/>
      </div>
      
      <Modal ref={ref} onAddTransition={addTransition}/>

    </div>
  )
}

export default TrackerApp
