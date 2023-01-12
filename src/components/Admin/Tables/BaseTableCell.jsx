import { Avatar, Button, TableCell } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProductAction } from '../../../redux/actions/ProductAction';

const BaseTableCell = ({ row, cmp }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteEvent = (id) => {
    dispatch(deleteProductAction(id));
  };
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
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDeleteEvent(row._id)}
        >
          Delete
        </Button>
      </TableCell>
    </>
  );
};

export default BaseTableCell;
