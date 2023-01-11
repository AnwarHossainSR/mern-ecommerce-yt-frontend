import { Button, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function createData(name, date, amount) {
  return { name, date, amount };
}

const rows = [
  createData('Anwar', '2021-09-01', 43.45),
  createData('Mahedi ', '2021-09-01', 54.3),
  createData('Jahid', '2021-09-01', 34.67),
  createData('Test', '2021-09-01', 34.67),
  createData('Sumaiya', '2021-09-01', 87.67),
];

export default function BasicTable() {
  return (
    <Stack>
      <TableContainer
        component={Paper}
        sx={{
          background: '#1F2A40',
          minWidth: '330px',
          maxHeight: '252px',
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            width: 0,
          },
        }}
      >
        <Stack sx={{ color: '#CED4DB' }} pl={2} pt={2}>
          <Typography variant="h56">Latest Transactions</Typography>
        </Stack>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ color: '#3DA58A', borderBottom: '5px solid #151632' }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{ color: '#CED4DB', borderBottom: '5px solid #151632' }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  sx={{ color: '#CED4DB', borderBottom: '5px solid #151632' }}
                >
                  <Button sx={{ background: '#4CCEAC', color: '#151632' }}>
                    {row.amount}$
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
