import React, { useEffect, useState } from 'react'
import Pie from '../components/PieD4'
import List from '../components/ListD4'
import Ranking from '../components/RankingD4'
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
            <List  data={data}/>
        </div>
            
    </div>
  )
}
