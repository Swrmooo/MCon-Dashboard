import { fontGrid } from '@mui/material/styles/cssUtils';
import React, { useState } from 'react'
import { Chart } from "react-google-charts"

export default function Bar( {data} ) {

  const [chartData, setChartData] = useState([]);

  const [options, setOptions] = useState({
    colors: ['#F49470', '#B85E31'],
    // series: {
    //   0: {  type: 'bars'  },
    //   1: {  type: 'bars'  },
    // },
    seriesType: 'bars',
    bar: { groupWidth: '30%' },
    chartArea: { height: '70%', width: '90%' },
    legend: {
      position: 'bottom',
    },
    hAxis: {
      slantedText: true,
      textStyle: { fontSize: 10 },
    },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 12,
        bold: true,
        color: 'black',
      },
    },
  });
// เพิ่มข้อมูลรถออก
  const updateChartData = () => {
    const seriesData = data.plant.map((item) => [item.name, item.worker[0][0]]);
    const workingOutData = ['รถไม่ปฏิบัติงาน', data.working[0].out]; 
    const newChartData = [['แพล้นท์', 'จำนวนรถที่ปฏิบัติงาน'],...seriesData, workingOutData];
    setChartData(newChartData);
  };

  React.useEffect(() => {
    updateChartData();
  }, [data]);

  return (
    <div style={{boxShadow:'0px 2px 5px lightgrey',borderRadius:'5px 5px 5px 5px'}}>
      <div style={{fontWeight:'bold',fontSize:'15px',display:'flex',justifyContent:'center',padding:'25px 0px 0px 0px'}}>
        จำนวนรถที่ปฏิบัติงานในแต่ละแพล้นท์และรถที่ไม่ได้ปฏิบัติงาน (คัน)</div>
      <Chart
      chartType="ComboChart"
      width="100%"
      height="410px"
      data={chartData}
      options={options}
      loader={<div>Loading...</div>}
      />
    </div>   
  )
}
