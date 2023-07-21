import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../components/RemoveScrollBar.css'

function createData(num, name, round) {
  return { num, name, round };
}

export default function Ranking ({ data }) {
  const [selectedOption, setSelectedOption] = React.useState('Top 5');

  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const sortedDriverData = React.useMemo(() => {
    if (!data || !data.driver) {
      return [];
    }

    const sortedData = [...data.driver];
    sortedData.sort((a, b) => b.q - a.q); // จัดเรียงข้อมูลตามค่า q จากมากไปน้อย
    return sortedData;
  }, [data]);

  const slicedDriverData = React.useMemo(() => {
    switch (selectedOption) {
      case 'Top 5':
        return sortedDriverData.slice(0, 5);
      case 'Top 10':
        return sortedDriverData.slice(0, 10);
      case 'Top 100':
        return sortedDriverData.slice(0, 100);
      default:
        return sortedDriverData.slice(0, 5);
    }
  }, [selectedOption, sortedDriverData]);


  return (
    <div className='ranking' style={{boxShadow:'0px 2px 5px lightgrey',borderRadius:'5px 5px 5px 5px', maxHeight: '390px', overflowY: "auto"}}>
      <div style={{display:'flex',justifyContent:'center',fontSize:'20px', fontWeight:'bold', padding:'8px 0px 0px 0px'}}>
        <p style={{}}>Driver Ranking</p>
        <div style={{margin: '20px 0px 0px 5px' }}>
          <select value={selectedOption} onChange={handleChangeOption} style={{padding:'5px 0px 5px 0px',borderRadius:'5px 5px 5px 5px', border:'1px solid #4E9974',fontSize:'20px',fontWeight:'bold'}}>
            <option value="Top 5">Top 5</option>
            <option value="Top 10">Top 10</option>
            <option value="Top 100">Top 100</option>
          </select>
        </div>
        {/* <FontAwesomeIcon icon={faCaretDown} style={{marginLeft:'20px'}}/>  */}
      </div>

      

      <TableContainer component={Paper} style={{padding:'0px 0px 0px 0px',boxShadow:'0px 0px 0px',borderRadius:'0px 0px 0px 0px'}}>
      <Table s aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#DDDDDD'}}>
            <TableCell align="center" sx={{fontWeight: 'bold'}} >ลำดับ</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold'}}>ชื่อ-นามสกุล</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold'}}>จำนวนเที่ยว</TableCell>
          </TableRow>
        </TableHead>

        <TableBody  >
          {slicedDriverData.map((row, index) => (
            <TableRow key={row.id} >
              <TableCell align="center"  sx={{ padding: '15px',fontWeight: 'bold'}}>{(index + 1).toLocaleString()}</TableCell>
              <TableCell align="center"  sx={{ padding: '15px',fontWeight: 'bold'}}>{row.name}</TableCell>
              <TableCell align="center"  sx={{ padding: '15px',fontWeight: 'bold'}}>{row.q.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {!data && <p>No data available.</p>}
  </div>
  );
}
