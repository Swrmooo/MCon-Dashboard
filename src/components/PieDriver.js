import React from 'react'
import { Chart } from "react-google-charts"

export default function pie( {data} ) {

    const dataWorker = data?.working || [];
    const inValue = dataWorker.length > 0 ? dataWorker[0].in : 0;
    const outValue = dataWorker.length > 0 ? dataWorker[0].out : 0;

    const chartData = [
        ["Working", "People"],
        ["รถปฏิบัติงาน", inValue],
        ["รถไม่ปฏิบัติงาน", outValue],
      ];
      
      const options = {
        pieStartAngle: 100,
        slices: {
          0: { color: "#F49465" },
          1: { color: "#B85E31" }, 
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

  return (
    <div style={{boxShadow:'0px 2px 5px lightgrey',borderRadius:'5px 5px 5px 5px',position:'relative'}}>
      <div style={{fontWeight:'bold',width:'100%',padding:'50px 0px 0px 0px',zIndex:'1',position:'absolute',display:'flex',justifyContent:'center'}}>
      สรุปการเข้างานของพนักงานขับรถโม่ปูน (คน)
      </div>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        loader={<div>Loading...</div>}
        width={"100%"}
        height={"455px"}
      />  
    </div>
    
  )
}
