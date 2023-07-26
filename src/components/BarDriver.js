import { fontGrid } from '@mui/material/styles/cssUtils';
import React, { useState } from 'react'
import { Chart } from "react-google-charts"

export default function Bar( {data} ) {

  var chartData = [
    ['แพล้นท์',     'จำนวน',              { role: 'annotation' },   'จำนวน2',                  { role: 'annotation' },           { role: 'style' }],
    ...data.plant.map(plant => 
    [plant.name,    plant.driver[0][0],  plant.driver[0][0],       null,                      null  ,                          '#F49470']),
    ['รถไม่ปฏิบัติงาน', null,                null,                     data.driverTotal[0].out,   data.driverTotal[0].out,         '#AE4C14'],
  ];

  // ตำแหน่งของคอลัมน์ 'จำนวน (อันที่ 2)' และคอลัมน์ 'จำนวน' ในแต่ละแถว

  chartData.forEach((row, index) => {
    if (index !== 0 && index !== chartData.length - 1) {
      row[1] = chartData[index][1];
    }
  });

  // var chartData = [
  //   ['แพล้นท์',      'รถปฏิบัติงาน',                      'จำนวน',                   { role: 'annotation' }, { role: 'style' }],
  //   ...data.plant.map(plant => 
  //   [plant.name,    null,       plant.driver[0][0],       plant.driver[0][0].toString(),  '#F49470']),
  //   ['รถไม่ปฏิบัติงาน', data.driverTotal[0].out,  data.driverTotal[0].out,  data.driverTotal[0].out.toString(), '#AE4C14'],
  // ];

  

  var options = {
    legendToggle: true,
    animation:{
      duration: 500,
      easing: 'out',
      startup: true
    },
    bar: { groupWidth: '80%' },
    chartArea: { height: '70%', width: '90%' },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 15,
        bold: true,
      },
    },
    // #F49470,#AE4C14
    series: {
      0: { labelInLegend: 'รถไม่ปฏิบัติงาน' ,color: '#F49470'},
      1: { labelInLegend: 'รถไม่ปฏิบัติงาน' ,color: '#AE4C14'},
    },
    hAxis: {
      slantedText: true,
      textStyle: { fontSize: 10 },
    },
    annotations: {
      alwaysOutside: true,
      stem: { length: 0 },
      textStyle: {
        fontSize: 15,
        color: 'black',
        auraColor: 'transparent', 
      },
    },
  }
  

  return (
    <div style={{boxShadow:'0px 2px 5px lightgrey',borderRadius:'5px 5px 5px 5px'}}>
      <div style={{fontWeight:'bold',fontSize:'15px',display:'flex',justifyContent:'center',padding:'25px 0px 0px 0px'}}>
        จำนวนรถที่ปฏิบัติงานในแต่ละแพล้นท์และรถที่ไม่ได้ปฏิบัติงาน (คัน)</div>
      <Chart
      chartType="ColumnChart"
      width="100%"
      height="410px"
      data={chartData}
      options={options}
      loader={<div>Loading...</div>}
      />
    </div>   
  )
}
