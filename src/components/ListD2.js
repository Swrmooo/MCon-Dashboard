import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import forTest from '../assets/waiting.png';
import '../components/ListD2.css'



function createData(num, numDo, car, site, plant, date, status) {
  return { num, numDo, car, site, plant, date, status};
}

export default function List({data}) {
    
  const formattedData = React.useMemo(() => {
    if (!data || !data.work) {
      return [];
    }

  return data.work.map((work, index) => {
      return createData(
        index + 1,
        work.numDo,
        work.car,
        work.site,
        work.plant,
        work.date,
        work.status,
      );
    });
  }, [data]);

  return (
    <div>
      <TableContainer className='table' component={Paper} style={{ boxShadow:'0px 0px 0px',maxHeight: '900px', overflowY: "auto", overflowX:'hidden' }} >
      <Table s aria-label="simple table">
        <TableHead >
          <TableRow sx={{backgroundColor:'#2388C8',position:'sticky'}}>
            <TableCell align="center" sx={{width:'100px', fontWeight: 'bold', color:'#FFFFFF'}} >เลขที่ DO</TableCell>
            <TableCell align="center" sx={{width:'100px', fontWeight: 'bold', color:'#FFFFFF'}}>เบอร์รถ</TableCell>
            <TableCell align="center" sx={{width:'100px', fontWeight: 'bold', color:'#FFFFFF'}}>ไซต์งาน</TableCell>
            <TableCell align="center" sx={{width:'100px', fontWeight: 'bold', color:'#FFFFFF'}}>แพล้นท์</TableCell>
            <TableCell align="center" sx={{width:'150px', fontWeight: 'bold', color:'#FFFFFF'}}>วันที่/เวลา</TableCell>
            <TableCell align="center" sx={{width:'150px', fontWeight: 'bold', color:'#FFFFFF'}}>สถานะ/จำนวนคิวจัดส่ง</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', color:'#FFFFFF'}}></TableCell>
          </TableRow>
        </TableHead>

        <TableBody >
        {formattedData.map((row) => (
            <TableRow className='table-body' key={row.num} sx={{backgroundColor:'#F3F3F3'}}>
              <TableCell align="center" sx={{fontWeight:'bold' }}>{row.numDo}</TableCell>
              <TableCell align="center" sx={{fontWeight:'bold' }}>{row.car}</TableCell>
              <TableCell align="center" sx={{fontWeight:'bold'}}>{row.site}</TableCell>
              <TableCell align="center" sx={{fontWeight:'bold'}}>{row.plant}</TableCell>
              <TableCell align="center" sx={{fontWeight:'bold'}}>
                  {row.date.map((da, index) => (
                    <div key={index}>
                      <div>{da.day}</div>
                      <div>{da.start} - {da.end}</div>
                    </div>
                  ))}
                  
              </TableCell>
              <TableCell align="center" sx={{ fontWeight:'bold' }}>
                  {row.status.map((st, index) => (
                    <div key={index}>
                      <div>
                      {st.name === "ถึงไซต์งาน" ? (
                        <div>
                          <div>{st.name}</div>
                          <div>{st.time[0].end}</div>
                          <div>{st.q[0].min} / {st.q[0].max}</div>
                        </div>
                      ) : st.name === "กำลังเดินทาง" ? (
                        <div>
                          <div>{st.name}</div>
                          <div>{st.time[0].start} / {st.time[0].end}</div>
                          <div>{st.q[0].min} / {st.q[0].max}</div>
                        </div>
                      ) : st.name === "เทปูน" ? (
                        <div>
                          <div>{st.name}</div>
                          <div>{st.time[0].start} / {st.time[0].end}</div>
                          <div>{st.q[0].min} / {st.q[0].max}</div>
                        </div>
                      ) : st.name === "โหลดปูน" ? (
                        <div>
                          <div>{st.name}</div>
                          -
                          <div>{st.q[0].min} / {st.q[0].max}</div>
                        </div>
                      ) : st.name === "ออกจากไซต์" ? (
                        <div>
                          <div>{st.name}</div>
                          <div>{st.time[0].start} / {st.time[0].end}</div>
                          <div>{st.q[0].min} / {st.q[0].max}</div>
                        </div>
                      ) : st.name === "ตรวจสอบ" ? (
                        <div>
                          <div style={{color:'darkred'}}>{st.name}</div>
                          
                        </div>
                      ) : (
                        <div>...</div>
                      )}
                      </div>
                    </div>
                  ))}
                </TableCell> 
                <TableCell align="center">
                  <img className='status-realtime' src={forTest} alt="รูปภาพ" />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
    </div>
  )
}
