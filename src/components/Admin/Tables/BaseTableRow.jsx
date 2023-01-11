import TableRow from '@mui/material/TableRow';
import BaseTableCell from './BaseTableCell';

const BaseTableRow = ({ rows }) => {
  return (
    <>
      {rows.map((row, index) => (
        <TableRow
          key={index}
          sx={{
            background: '#313B4F',
            '&:last-child td, &:last-child th': { border: 0 },
          }}
        >
          <BaseTableCell row={row} />
        </TableRow>
      ))}
    </>
  );
};

export default BaseTableRow;
