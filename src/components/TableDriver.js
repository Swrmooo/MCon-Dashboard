import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(num, car, name, transport, q, km) {
  return { num, car, name, transport, q ,km };
}

export default function List( {data} ) {
  const formattedData = React.useMemo(() => {
    if (!data || !data.plant) {
      return [];
    }

  return data.plant.map((plant, index) => {
      return createData(
        index + 1,
        plant.car,
        plant.name,
        plant.transport,
        plant.q,
        plant.km
      );
    });
  }, [data]);

  return (

    <div className='ranking' style={{boxShadow:'0px 2px 5px lightgrey',borderRadius:'5px 5px 5px 5px', maxHeight: '400px', overflowY: "auto"}}>
      <TableContainer component={Paper} style={{ boxShadow:'0px 0px 0px'  }} >
      <Table s aria-label="simple table">
        <TableHead >
          <TableRow sx={{ backgroundColor: '#DDDDDD'}}>
            <TableCell align="center" sx={{fontWeight: 'bold', width:'10%'}} >ลำดับ</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', width:'20%'}}>เบอร์รถ</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', width:'20%'}}>แพล้นท์</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', width:'15%'}}>จำนวนเที่ยว</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', width:'15%'}}>จำนวนคิว</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', width:'20%'}}>กิโลเมตรสะสม</TableCell>
          </TableRow>
        </TableHead>

        <TableBody >
          {formattedData.map((row) => (
            <TableRow key={row.num} sx={{}}>
              <TableCell align="center"  sx={{ }}>{row.num.toLocaleString()}</TableCell>
              <TableCell align="center"  sx={{ }}>{row.car}</TableCell>
              <TableCell align="center"  sx={{ }}>{row.name}</TableCell>
              <TableCell align="center"  sx={{ }}>{row.transport.toLocaleString()}</TableCell>
              <TableCell align="center"  sx={{ }}>{row.q.toLocaleString()}</TableCell>
              <TableCell align="center"  sx={{ }}>{row.km.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
