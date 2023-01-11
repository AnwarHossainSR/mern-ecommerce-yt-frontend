import { Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import BaseTableView from '../../../components/Admin/Tables/BaseTableView';

const headers = ['Dessert', 'Calories', 'Fat', 'Carbs', 'Protein'];

const rows = [
  {
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
];

const index = () => {
  return (
    <Stack>
      <Typography variant="h5">List of Products</Typography>
      <Stack py={4}>
        <TableContainer component={Paper}>
          <BaseTableView headers={headers} rows={rows} />
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default index;
