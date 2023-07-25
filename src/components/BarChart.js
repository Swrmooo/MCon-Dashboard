import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function BarChart ({  data }) {
  
  var chartData = [
    ['แพล้นท์', 
    'จำนวนคิว(คิว)', { role: 'annotation' }, 
    'จำนวนพนักงาน(คน)', { role: 'annotation' }, 
    'จำนวนรถโม่ปูน(คัน)', { role: 'annotation' }],
    ...data.map((item, index) => [`แพล้น ${index + 1}`, item[0], item[0].toString(), item[1], item[1].toString(), item[2], item[2].toString()]),
  ];

  

  var options = {
    animation:{
      duration: 500,
      easing: 'out',
      startup: true
    },
    colors: ['#9DC3E6', '#FF9C64', '#4DB86B'],
    seriesType: 'bars',
    pointSize: 5,
    series: {
        0: {type: 'bar',}, 
        1: {type: 'line', }, 
        2: {type: 'line', lineDashStyle: [2, 2], },
    },
    bar: { groupWidth: '50%' },
    hAxis: {
      slantedText: true,
      textStyle: {
        fontSize: 10, 
      },
    },
    legend : 'bottom',
    chartArea: { height: '70%', width: '90%' },
    annotations: {
      alwaysOutside: true,
      stem: { length: 0 },
      textStyle: {
        fontSize: 15,
        // bold: true,
        // color: 'black',
        auraColor: 'transparent', 
      },
      boxStyle: {
        // stroke: '#888',
        // fill: 'orange',
        
      },
    },
  };

  return (
      <div style={{ border:'',margin: '0 auto'}}>
        <div style={{fontWeight:'bold',fontSize:'20px',position:'relative',display:'flex',justifyContent:'center'}}>จำนวนคิวที่จัดส่งในแต่ละแพล้นท์งาน</div>
        <Chart
            chartType="ComboChart"
            data={chartData}
            options={options}
            width={"100%"}
            height={"510px"}
          />
      </div> 
    );
  };
  export default BarChart;