import React from 'react';
import CustomChart from './CustomPieChart';
import BarChart from './BarChart';
import GuageChart from './GuageChart';
import CustomPieChart from './CustomPieChart';
import FullPieChart from './FullPieChart';
import LineChart from './LineChart';
const Chart = () => {

  let data = [
    {
      "country": "AD",
      "hot dog": 30,
      "hot dogColor": "hsl(275, 70%, 50%)",
      "burger": 171,
      "burgerColor": "hsl(59, 70%, 50%)",
      "sandwich": 96,
      "sandwichColor": "hsl(222, 70%, 50%)",
      "kebab": 68,
      "kebabColor": "hsl(16, 70%, 50%)",
    }
  ]

  return (
    <div>
      <div className='flex gap-6 mb-6 '>
        <BarChart />
        <CustomPieChart />
        <GuageChart />
        <FullPieChart />
      </div>
      <div className='flex gap-6 mb-6  '>
         <LineChart />
      </div>
    </div>


  )
}

export default Chart