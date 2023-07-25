import React, { useState, useEffect } from "react";
import QBox from '../components/QBox'
import Ranking from '../components/CusRanking';
import Chart from '../components/AreaChart';
import Customer from '../components/CusFilter';
import Plant from "../components/Plant";
import axios from "axios";


function Dash1() {

  const [data, setData] = useState(null);

  useEffect(() => {
    
    axios.get('../data/Data1.json').then((response) => {
        console.log(response)
        setTimeout(() => {
          setData(response.data)
          // console.log(ranking)
        }, );
    });

  }, []);
  
 //1. แต่ละหน้าไม่ควรดึง data ซ้ำกันมากกว่า1
 //2. render เท่าที่จำเป็น
 //3. data ทุกอย่างเข้าไฟล์ .json  แล้วนำมาแสดงให้ได้ เพราะ server จะ เข้ามา set ในไฟล์ .json
 //4. nowrap

  return (
    // border:'1px dashed'
    <div className="wrapper" style={{margin:"40px 100px 0px 110px"}}>
      <div style={{display:'flex', columnGap:'50px'}}>
        <div>
          <QBox color="#5CA0DE" title="จำนวนคิวทั้งหมด(วันนี้)" num = {data?.today.toLocaleString()} />
          
          <br />
          
          <QBox color="#48C7A1" title="จำนวนคิวทั้งหมด(เดือน)" num = {data?.month.toLocaleString()} />
        
          <p style={{marginTop:"40px", fontWeight:"bold", fontSize:"25px"}}>Customers Ranking</p>
        
          <Ranking ranking={data?.customer || []} />

        </div>

        <div>
          <div style={{}}>
            <Chart data={data?.chartData || []} exToday={data?.exToday || []}/>
          </div>
          <div style={{display:'flex',columnGap:'80px'}}>
            <div style={{}}>
              <Plant data={data?.plant || []} />
                
            </div>
            <div style={{}}>
                <Customer data={data?.customer || []}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dash1 ;