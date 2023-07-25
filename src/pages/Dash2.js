import React, { useEffect, useState } from 'react'
import Table from '../components/TableStatus'
import axios from 'axios'


export default function Dash2() {

    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('../data/Data2.json').then((response) => {
            console.log(response)
            setTimeout(() => {
              setData(response.data)
            //   console.log(response.data)
            }, );
        });
      }, []);

  return (
    <div className='wrapper' style={{margin:"30px 200px 0 200px"}}>
        <Table data={data}/>
        
    </div>
  )
}
