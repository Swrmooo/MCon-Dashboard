import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../components/Remove.css'

function createData(num, name, transport, q, km) {
  return { num, name, transport, q ,km };
}

export default function List( {data}) {
  const formattedData = React.useMemo(() => {
    if (!data || !data.driver) {
      return [];
    }

  return data.driver.map((driver, index) => {
      return createData(
        index + 1, // ใช้ index + 1 เพื่อแสดงลำดับที่ของแต่ละข้อมูล
        driver.name,
        driver.transport,
        driver.q,
        driver.km
      );
    });
  }, [data]);


  return (

    <div className='table' style={{boxShadow:'0px 2px 5px lightgrey',borderRadius:'5px 5px 5px 5px',maxHeight: '860px', overflowY: "auto"}}>
      <TableContainer component={Paper} style={{ marginTop:'',boxShadow:'0px 0px 0px' }} >
      <Table s aria-label="simple table">
        <TableHead >
          <TableRow className="sticky-header" sx={{backgroundColor:'#DDDDDD'}}>
            <TableCell align="center" sx={{fontWeight: 'bold'}} >ลำดับ</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold'}}>ชื่อ-นามสกุล</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold'}}>จำนวนเที่ยว</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold'}}>จำนวนคิว</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold'}}>กิโลเมตรสะสม</TableCell>
          </TableRow>
        </TableHead>

        <TableBody >
        {formattedData.map((row) => (
            <TableRow key={row.num} sx={{padding:'50px'}}>
              <TableCell align="center"  sx={{ padding: '10px'}}>{row.num.toLocaleString()}</TableCell>
              <TableCell align="center"  sx={{ padding: '10px'}}>{row.name}</TableCell>
              <TableCell align="center"  sx={{ padding: '10px'}}>{row.transport.toLocaleString()}</TableCell>
              <TableCell align="center"  sx={{ padding: '10px'}}>{row.q.toLocaleString()}</TableCell>
              <TableCell align="center"  sx={{ padding: '10px'}}>{row.km.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
