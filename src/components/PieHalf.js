import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';



function Radia({  num, numTotal, title, colors }) {
  
  const data = [
    ["Task", "Number"],
    ["จำนวนที่ทำตอนนี้", num, ],
    ["จำนวนทั้งหมด", numTotal, ],
  ];
  
  const options = {
    colors: colors,
    height: 400,
    legend: 'none',
    pieHole: 0.6,
    pieStartAngle: 270,
    pieSliceText: 'value',
    pieSliceTextStyle:{
      fontSize: 20,
      color: 'red',
    },
    slices: {
       1: { color: 'transparent',},
    },
    tooltip: { isHtml: true },
    
  };

  // border:'1px dashed'
  return (
    <div style={{position: 'relative', width: '100%' }}>
      <div className='header-title' style={{ zIndex: 1, position: 'absolute', width:'100%', fontWeight: 'bold', fontSize: '20px', display: 'flex', justifyContent: 'center' }}>
        <p>{title}</p>
      </div>

      <div className='chart' style={{position:'relative'}}>
        <div className='pieChart' style={{marginTop:'20px'}}>
          <Chart
            chartType="PieChart"
            data={data}
            loader={<div>Loading Chart...</div>}
            options={options}
            width={"100%"}
          />   
        </div>
      </div>
</div> 
  );
}

export default Radia;








