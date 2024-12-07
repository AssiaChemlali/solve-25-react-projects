import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import { PieChart } from '@mui/x-charts'
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


 function addTransition(trans){
    setBalance(trans.amout)
    setTransaction(prevData=>{
      return [...prevData,trans]
    })
    if(trans.type==="income"){
      const total= TotalIncome + trans.amout
      setTotalIncome(total)
    }
    if(trans.type==="expense"){
      const total= TotalExpensive + trans.amout
      setTotalExpensive(total)
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
        <div className='p-5 '>
            <h2 className='font-bold'>Balance is : $ {balance}</h2>
            <h3> Total income: $ {TotalIncome}</h3>
            <h3>Total Experience: $ {TotalExpensive}</h3>
        </div>

        <div className='border p-5 '>
          <PieChart
            series={[
                    {
                      data: [
                        { id: 0, value: TotalIncome, label: 'income' },
                        { id: 1, value: TotalExpensive, label: 'Expene' },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
          />
        
        
        </div>
      </div>

      <div className='flex flex-row w-full justify-between bg-red-100 p-4'>
        <ul>
          <li className='font-bold'>Income  :</li>
          {
            transaction.length >0 &&
            transaction?.map((item,index)=>{
              if(item.type==="income"){
                 return(<li key={index}> {item.type} : {item.amout}$</li>)
              }
            })
          }
        </ul>
        <ul>
          <li className='font-bold'>Expense:</li>
          {
            transaction.length >0 &&
            transaction?.map((item,index)=>{
                if(item.type==="expense")
                  return(<li key={index}>{item.type} : {item.amout}$</li>)
              })
          }
        </ul>
      </div>
      
      <Modal ref={ref} onTrans={addTransition}/>

    </div>
  )
}

export default TrackerApp
