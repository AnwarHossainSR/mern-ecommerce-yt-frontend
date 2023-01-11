import { TableCell } from '@mui/material';

const BaseTableCell = ({ row }) => {
  return (
    <>
      {Object.keys(row).map((key, index) => (
        <TableCell
          key={index}
          //align={index === 0 ? 'left' : 'right'}
          sx={{ color: '#D9DBDF' }}
        >
          {row[key]}
        </TableCell>
      ))}
    </>
  );
};

export default BaseTableCell;
