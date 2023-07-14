import React, { useEffect, useState } from 'react'
import {Chart} from "react-google-charts";

function Graph({data , today , month , exToday}) {
  
  const [chartData, setChartData] = useState([['Date', 'Value']]);

    
  useEffect(() => {
    if (month) {
      const startDate = new Date();
      startDate.setDate(1);
      const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
      const numDays = endDate.getDate();
  
      let currentDate = new Date(startDate);
      const updatedChartData = [['Date', 'Value']];
  
      for (let i = 0; i < numDays; i++) {
        const dateString = currentDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        const value = exToday[i] || 0; 
        updatedChartData.push([dateString, value]);
        currentDate.setDate(currentDate.getDate() + 1);
      }
  
      setChartData(updatedChartData);
    }
  }, [exToday, month]);

  useEffect(() => {
    if (chartData.length > 1) {
      
    }
  })

  const options = {
      title: "จำนวนคิวทั้งหมดในแต่ละวันของเดือนนี้",
      
      chartArea: {width:"90%"},
  
      legend:{
        position : 'none',
      },
      hAxis: {
        slantedText: false,
        format: 'd MMM',
        title: '',
        textStyle: {
          fontSize: 10, 
        },
        titleTextStyle: {
          fontSize: 15, 
          
        },
      },
      vAxis: {
        slantedText: false,
        title: 'จำนวนคิวทั้งหมดในแต่ละวัน',
      },
    
      colors: ['#90D7FF'],
      lineWidth: 0,
      pointSize: 5,
      pointShape: 'circle',

  }
  // console.log(JSON.stringify(chartData));
  return (
    <div >
      <Chart chartType='AreaChart'
       data={chartData} 
       options={options}
       width={'100%'}
       height='280px'
      />

      </div>
  )
}
export default Graph ;