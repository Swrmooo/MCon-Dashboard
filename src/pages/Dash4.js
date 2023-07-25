import React, { useEffect, useState } from 'react'
import Pie from '../components/PieGreen'
import Table from '../components/DriverTable'
import Ranking from '../components/DriverRanking'
import axios from 'axios'

export default function Dashboard() {

    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('../data/Data4.json').then((response) => {
            console.log(response)
            setTimeout(() => {
              setData(response.data)
            //   console.log(response.data)
            }, );
        });
      }, []);  

  return (
    <div className='wrapper' style={{display:'flex',columnGap:'50px',margin:"60px 200px 0px 200px"}}>
        <div style={{width:'50%'}}>
            <div>
                <Pie data={data}/>
            </div>
            <div style={{marginTop:'10px'}}> 
                <Ranking data={data}/>
            </div>
        </div>

        <div style={{width:'100%'}}>
            <Table  data={data}/>
        </div>
            
    </div>
  )
}
