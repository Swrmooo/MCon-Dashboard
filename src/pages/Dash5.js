import React, { useEffect, useState } from 'react'
import Pie from '../components/PieD5'
import Bar from '../components/BarD5'
import List from '../components/ListD5'
import axios from 'axios'
import '../components/RemoveScrollBar.css'

export default function Dashboard() {

  const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('../data/Data5.json').then((response) => {
            console.log(response)
            setTimeout(() => {
              setData(response.data)
            //   console.log(response.data)
            }, );
        });
      }, []);  

      if (!data) {
        // แสดงข้อความ "กำลังโหลดข้อมูล..." หากยังไม่ได้รับข้อมูล
        return <div>Loading data...</div>;
      }

  return (
    <div className='wrapper' style={{display:'flex',columnGap:'20px',margin:"50px 200px 0px 200px"}}>
        <div style={{width:'45%',height:"100%"}}>
          <Pie data={data}/>
        </div>

        <div style={{width:'100%',display:"flex", flexDirection:'column', rowGap:'15px' }}>
            <div style={{}}>
              <Bar data={data}/>
            </div>
            <div style={{}}>
                <List  data={data}/>
            </div>
       </div>
  
    </div>
  )
}
