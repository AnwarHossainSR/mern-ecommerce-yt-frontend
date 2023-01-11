import { Avatar, TableCell } from '@mui/material';

const BaseTableCell = ({ row, cmp }) => {
  return (
    <>
      {Object.keys(row).map((key, index) => (
        <TableCell
          key={index}
          //align={index === 0 ? 'left' : 'right'}
          sx={{ color: '#D9DBDF' }}
        >
          {cmp === 'products' && index === 1 ? (
            <Avatar src="" alt="" />
          ) : (
            row[key]
          )}
          {cmp !== 'products' && row[key]}
        </TableCell>
      ))}
    </>
  );
};

export default BaseTableCell;
