import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const BaseTableHeader = ({ headers }) => {
  return (
    <TableHead sx={{ background: '#3E4396' }}>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {headers.map((header, index) => (
          <TableCell
            sx={{ color: '#D9DBDF' }}
            key={index}
            //align={index === 0 ? 'left' : 'right'}
          >
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default BaseTableHeader;
