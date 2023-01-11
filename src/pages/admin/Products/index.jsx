import { Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import BaseTableView from '../../../components/Admin/Tables/BaseTableView';
import {
  productTableHeaders,
  productTableRows,
} from '../../../constants/tableData';

const index = () => {
  return (
    <Stack>
      <Typography variant="h5">List of Products</Typography>
      <Stack py={4}>
        <TableContainer component={Paper}>
          <BaseTableView
            headers={productTableHeaders}
            rows={productTableRows}
            cmp="products"
          />
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default index;
