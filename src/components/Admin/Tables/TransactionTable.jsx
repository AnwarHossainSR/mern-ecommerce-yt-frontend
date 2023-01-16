import { Button, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';

export default function BasicTable({ latestOrders }) {
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
            {latestOrders &&
              latestOrders.length > 0 &&
              latestOrders.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{
                    '&:last-child td, &:last-child th': { borderBottom: 0 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: '#3DA58A', borderBottom: '5px solid #151632' }}
                  >
                    {order?.user?.name}
                  </TableCell>
                  <TableCell
                    sx={{ color: '#CED4DB', borderBottom: '5px solid #151632' }}
                  >
                    {moment(order?.createdAt).startOf('hour').fromNow()}
                  </TableCell>
                  <TableCell
                    sx={{ color: '#CED4DB', borderBottom: '5px solid #151632' }}
                  >
                    <Button sx={{ background: '#4CCEAC', color: '#151632' }}>
                      {order?.totalPrice}$
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
