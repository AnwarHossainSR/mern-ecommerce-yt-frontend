import { Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/Admin/common/Loader';
import BaseTableView from '../../../components/Admin/Tables/BaseTableView';
import { productTableHeaders } from '../../../constants/tableData';
import { getAllProducts } from '../../../redux/actions/ProductAction';
import { getFilteredProducts } from '../../../utils/helper';

const index = () => {
  const dispatch = useDispatch();
  const { isLoading, productsInfo } = useSelector((state) => state.products);
  const filteredProducts = getFilteredProducts(productsInfo);

  useEffect(() => {
    if (productsInfo.length === 0) {
      dispatch(getAllProducts());
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Stack>
      <Typography variant="h5">List of Products</Typography>
      <Stack py={4}>
        <TableContainer component={Paper}>
          <BaseTableView
            headers={productTableHeaders}
            rows={filteredProducts}
            cmp="products"
          />
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default index;
