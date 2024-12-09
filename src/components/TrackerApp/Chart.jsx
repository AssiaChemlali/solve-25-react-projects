import React from 'react'
import { PieChart } from '@mui/x-charts'
const Chart = ({TotalIncome,TotalExpensive}) => {
  return (
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
  )
}

export default Chart

