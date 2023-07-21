import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import st01 from '../assets/Statust Process_01.png';
import st02 from '../assets/Statust Process_02.png';
import st03 from '../assets/Statust Process_03.png';
import st04 from '../assets/Statust Process_04.png';
import st05 from '../assets/Statust Process_05.png';
import stRed from '../assets/Statust Process_Red_all.png';
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
    <div style={{boxShadow:'0px 2px 5px lightgrey',borderRadius:'5px 5px 5px 5px'}}>
      <TableContainer className='table' component={Paper} style={{ boxShadow:'0px 0px 0px',maxHeight: '900px', overflowY: "auto", overflowX:'hidden' }} >
      <Table s aria-label="simple table">
        <TableHead >
          <TableRow sx={{backgroundColor:'#2388C8',position:'sticky'}}>
            <TableCell align="center" sx={{width:'10%', fontWeight: 'bold', color:'#FFFFFF'}} >เลขที่ DO</TableCell>
            <TableCell align="center" sx={{width:'10%', fontWeight: 'bold', color:'#FFFFFF'}}>เบอร์รถ</TableCell>
            <TableCell align="center" sx={{width:'10%', fontWeight: 'bold', color:'#FFFFFF'}}>ไซต์งาน</TableCell>
            <TableCell align="center" sx={{width:'10%', fontWeight: 'bold', color:'#FFFFFF'}}>แพล้นท์</TableCell>
            <TableCell align="center" sx={{width:'10%', fontWeight: 'bold', color:'#FFFFFF'}}>วันที่/เวลา</TableCell>
            <TableCell align="left" sx={{width:'50%', fontWeight: 'bold', color:'#FFFFFF'}}>สถานะ/จำนวนคิวจัดส่ง</TableCell>
            {/* <TableCell align="center" sx={{fontWeight: 'bold', color:'#FFFFFF'}}></TableCell> */}
          </TableRow>
        </TableHead>

        <TableBody >
        {formattedData.map((row) => (
            <TableRow className='table-body' key={row.num} sx={{backgroundColor:'#F3F3F3'}}>
              <TableCell align="center" sx={{fontWeight:'bold',fontSize:'15px' }}>{row.numDo}</TableCell>
              <TableCell align="center" sx={{fontWeight:'bold',fontSize:'15px' }}>{row.car}</TableCell>
              <TableCell align="center" sx={{fontWeight:'bold',fontSize:'15px'}}>{row.site}</TableCell>
              <TableCell align="center" sx={{fontWeight:'bold',fontSize:'15px'}}>{row.plant}</TableCell>
              <TableCell align="center" sx={{fontWeight:'bold',fontSize:'15px'}}>
                  {row.date.map((da, index) => (
                    <div key={index}>
                      <div>{da.day}</div>
                      <div>{da.start} - {da.end}</div>
                    </div>
                  ))}
                  
              </TableCell>
              <TableCell align="center" sx={{ fontWeight:'bold',fontSize:'15px'}}>
                  {row.status.map((st, index) => (
                    <div key={index}>
                      <div>
                      {st.code === "03" ? ( 
                        <div className='arrived' style={{display:'flex'}}>
                          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'20%'}}>
                            <div>ถึงไซต์งาน </div>
                            <div>{st.time[0].end}</div>
                            <div>{st.q[0].min} / {st.q[0].max}</div>
                          </div>
                          <div style={{width:'100%'}}>
                            <img src={st03} alt="status03" style={{width:'100%'}}/>
                          </div>
                        </div>
                      ) : st.code === "02" ? (
                        <div className='onGoing' style={{display:'flex'}}>
                          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'20%'}}>
                            <div>กำลังเดินทาง</div>
                            <div>{st.time[0].start} / {st.time[0].end}</div>
                            <div>{st.q[0].min} / {st.q[0].max} คิว</div>
                          </div>
                          <div style={{width:'100%'}}>
                            <img src={st02} alt="status02" style={{width:'100%'}}/>
                          </div>
                        </div>
                      ) : st.code === "04" ? (
                        <div className='onCement' style={{display:'flex'}}>
                          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'20%'}}>
                            <div>เทปูน</div>
                            <div>{st.time[0].start} / {st.time[0].end}</div>
                            <div>{st.q[0].min} / {st.q[0].max}</div>
                          </div>
                          <div style={{width:'100%'}}>
                            <img src={st04} alt="status04" style={{width:'100%'}}/>
                          </div>
                        </div>
                      ) : st.code === "01" ? (
                        <div className='loading' style={{display:'flex'}}>
                          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'20%'}}>
                            <div>โหลดปูน</div>
                            -
                            <div>{st.q[0].min} / {st.q[0].max}</div>
                          </div>
                          <div style={{width:'100%'}}>
                            <img src={st01} alt="status01" style={{width:'100%'}}/>
                          </div>
                          
                        </div>
                      ) : st.code === "05" ? (
                        <div className='leave' style={{display:'flex'}}>
                          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'20%'}}>
                            <div>ออกจากไซต์</div>
                            <div>{st.time[0].start} / {st.time[0].end}</div>
                            <div>{st.q[0].min} / {st.q[0].max}</div>
                          </div>
                          <div style={{width:'100%'}}>
                            <img src={st05} alt="status05" style={{width:'100%'}}/>
                          </div>
                          
                        </div>
                      ) : st.code === "00" ? (
                        <div className='error' style={{display:'flex'}}>
                          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'20%'}}>
                            <div style={{color:'darkred'}}>ตรวจสอบ</div>
                          </div>
                          <div style={{width:'100%'}}>
                            <img src={stRed} alt="statusGPSmissing" style={{width:'100%'}}/>
                          </div>
                          
                          
                        </div>
                      ) : (
                        <div>...</div>
                      )}
                      </div>
                    </div>
                  ))}
                </TableCell> 
                {/* <TableCell align="center">
                  
                </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
    </div>
  )
}
