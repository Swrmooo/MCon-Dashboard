import React, { useState, useEffect } from "react";
import Queue from '../components/Queue'
import Ranking from '../components/Ranking';
import Graph from '../components/Graph';
import Customer from '../components/Customer';
import PlanBox from "../components/Plant";
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
    <div className="wrapper" style={{margin:"30px 100px 0px 100px"  }}>
      <div style={{display:'flex', columnGap:'30px',width:'100%'}}>
        <div>
          <Queue color="#008CFF" title="จำนวนคิวทั้งหมด(วันนี้)" num = {data?.today.toLocaleString()} />
          
          <br />
          
          <Queue color="#05CD85" title="จำนวนคิวทั้งหมด(เดือน)" num = {data?.month.toLocaleString()} />
        
          <p style={{marginTop:"50px" , fontWeight:"bold", fontSize:"25px"}}>Customers Ranking</p>
        
          <Ranking ranking={data?.customer || []} />

        </div>

        <div style={{width:'100%'}}>
          <div>
            <Graph data={data?.chartData || []} exToday={data?.exToday || []}/>
          </div>
          <div style={{display:'flex'}}>
            <div className='planGroup' style={{width:'100%'}}>
              <PlanBox data={data?.plant || []} />
                
            </div>
            <div className="search" style={{width:'60%'}} >
                <Customer data={data?.customer || []}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dash1 ;