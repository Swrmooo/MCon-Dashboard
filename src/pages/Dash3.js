import React, { useEffect, useState } from 'react'
import Pie from '../components/PieHalf'
import Box from '../components/Box'
import Bar from '../components/BarChart'
import axios from 'axios'
import userIcon from '../assets/icon_Graph-01.png'
import plantIcon from '../assets/icon_Graph-02.png'
import truckIcon from '../assets/icon_Graph-03.png'

function Dashboard() {
    
    const [data, setData] = useState(null);

    async function fetchData() {
        try {
          const response = await axios.get('/Data/Data3.json');
          const data = response.data;
          setData(data);
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchData();
      }, []);
  
  return (
    <div className='wrapper' style={{position:'relative',margin:"40px 200px 40px 200px"}} >
        
        <div className='header' style={{zIndex: 1,display:"flex",width:"100%",height:'400px', margin:'0px 0px -50px 0px',justifyContent:"space-around"}}>
          
          <div style={{position:'relative'}}>
            <img src={userIcon} style={{zIndex: 2 ,position:'absolute',width:'25%',top:'140px', right:'150px'}}></img>
            {data ? (
            <Pie num={data?.emp} numTotal={data?.empTotal} title="จำนวนพนักงานขับรถโม่ที่เข้าปฎิบัติงาน (คน)" colors={["#4DB86B"]}/>
            ) : (null) }
          </div>
          
          <div style={{position:'relative'}}>
            <img src={truckIcon} style={{zIndex: 2 ,position:'absolute',width:'30%',top:'125px', right:'135px'}}></img>
            {data ? (
            <Pie num={data?.truck} numTotal={data?.truckTotal} title="จำนวนรถโม่ที่เข้าปฎิบัติงาน (คัน)" colors={["#FF9C64"]}/>
            ) : (null) }
          </div>
          
          <div style={{position:'relative'}}>
            <img src={plantIcon} style={{zIndex: 2 ,position:'absolute',width:'25%',top:'137px', right:'148px'}}></img>
            {data ? (
            <Pie num={data?.goods} numTotal={data?.goodsTotal} title="จำนวนผลิตรวมทั้งหมด (คิว)" colors={["#2C90EE"]}/>
            ) : (null) }
            
          </div>
          
        </div>
        <div className='border' style={{zIndex: 3 ,border:'3px solid lightgrey',position:'relative',top:'-50px'}}></div>
        
        <div className='content' style={{position:'relative',display:"flex",paddingTop:'',columnGap:"20px"}}>
          
            <div className='box' style={{zIndex: 2 ,position:'relative'}} >
                <div style={{position:'relative'}}>
                    <Box num={data?.transport} title="จำนวนขนส่งทั้งหมด (เที่ยว)" suffix="เที่ยว"/>
                </div>
                <br/>
                <div style={{position:'relative'}}>
                    <Box  num={data?.q} title="จำนวนคิวทั้งหมด (คิว)" suffix="คิว" colorF="#2C90EE"/>
                </div>
                
            </div>
            <div className='bar-chart' style={{zIndex: 1 ,width:"100%",height:'auto',position:'relative',right:'20px'}}>
              <Bar data={data?.chartData || []} />
            </div>
        </div>

    </div>
  )
}
export default Dashboard ;