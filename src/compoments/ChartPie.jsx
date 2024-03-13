import React from 'react'

import { Pie } from "react-chartjs-2";
function ChartPie({chartData}) {
    
  return (
    <div className='m-4 px-14 py-12'>
      <div className="chart-container">
      <h2 style={{ textAlign: "center" }}className='text-3xl' >Monthly Payment: $ 47.18</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            }
          }
        }}
      />
    </div>
    </div>
  )
}

export default ChartPie
