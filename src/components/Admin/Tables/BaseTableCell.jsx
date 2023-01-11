import { Avatar, Button, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BaseTableCell = ({ row, cmp }) => {
  console.log(row);
  const navigate = useNavigate();
  return (
    <>
      {Object.keys(row).map((key, index) => (
        <TableCell
          key={index}
          //align={index === 0 ? 'left' : 'right'}
          sx={{ color: '#D9DBDF' }}
        >
          {cmp === 'products' && index === 2 ? (
            <Avatar
              src={row[key][0].url}
              alt=""
              sx={{ width: '50px', height: '50px' }}
            />
          ) : (
            row[key]
          )}
          {cmp !== 'products' && row[key]}
        </TableCell>
      ))}
      <TableCell
        sx={{
          '&:last-child button': { ml: 2 },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`./${row._id}`)}
        >
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </TableCell>
    </>
  );
};

export default BaseTableCell;
