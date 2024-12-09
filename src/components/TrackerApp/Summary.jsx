import React from 'react'

const Summary = ({balance,TotalExpensive,TotalIncome}) => {
  return (
    <div className='p-5 '>
      <h2 className='font-bold'>Balance is : $ {balance}</h2>
      <h3> Total Income: {TotalIncome} $</h3>
      <h3>Total Expense:  {TotalExpensive}$</h3>
    </div>
  )
}

export default Summary
