import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Frozen', 159),
  createData('Ice ', 237),
  createData('Ecla', 262),
  createData('Ecla', 262),
  createData('Ecla', 262),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: '#1F2A40',
        maxHeight: '250px',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
          width: 0,
        },
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#CED4DB' }}>Name</TableCell>
            <TableCell sx={{ color: '#CED4DB' }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ color: '#CED4DB' }}>
                {row.name}
              </TableCell>
              <TableCell sx={{ color: '#CED4DB' }}>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
