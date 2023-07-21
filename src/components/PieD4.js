import React from 'react'
import { Chart } from "react-google-charts"

export default function Pie( {data} ) {

    const dataWorker = data?.worker || [];
    const inValue = dataWorker.length > 0 ? dataWorker[0].in : 0;
    const outValue = dataWorker.length > 0 ? dataWorker[0].out : 0;


    const chartData = [
        ["Working", "People"],
        ["คนทำงาน", inValue],
        ["คนไม่ได้ทำงาน", outValue],
      ];
      
      const options = {
        pieStartAngle: 100,
        slices: {
          0: { color: "#4E9974" },
          1: { color: "#00391D" }, 
        },
        pieSliceBorderColor: "transparent",
        legend : {
          position : 'bottom',
        },
        pieSliceText: 'value',
        pieSliceTextStyle: {
          fontSize: 16, 
          bold: true,
          // textPosition: 'none',
        },
        
      };
      // border:'1px solid'
  return (
    <div style={{boxShadow:'0px 2px 5px lightgrey',borderRadius:'5px 5px 5px 5px',position:'relative'}}>
      <div style={{fontWeight:'bold',padding:'40px',zIndex:'1',position:'absolute',display:'flex',justifyContent:'center',right:'40px'}}>
      สรุปการเข้างานของพนักงานขับรถโม่ปูน (คน)
      </div>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        loader={<div>Loading...</div>}
        width={"100%"}
        height={"465px"}
      />
    </div>
  )
}
