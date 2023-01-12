import { Button, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/Admin/common/Loader';
import BaseTableView from '../../../components/Admin/Tables/BaseTableView';
import { productTableHeaders } from '../../../constants/tableData';
import { getAllProducts } from '../../../redux/actions/ProductAction';
import { getFilteredProducts } from '../../../utils/helper';
import CustomModal from '../Modals/Modal';
import CreateProduct from './CreateProduct';

const index = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, productsInfo } = useSelector((state) => state.products);
  const filteredProducts = getFilteredProducts(productsInfo);

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (productsInfo.length === 0) {
      dispatch(getAllProducts());
    }
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5">List of Products</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenModal(true)}
        >
          Create Product
        </Button>
      </Stack>
      <Stack py={4}>
        <TableContainer component={Paper}>
          <BaseTableView
            headers={productTableHeaders}
            rows={filteredProducts}
            cmp="products"
          />
        </TableContainer>
      </Stack>
      {openModal && (
        <CustomModal open={openModal} handleClose={handleClose}>
          <CreateProduct handleClose={handleClose} />
        </CustomModal>
      )}
    </Stack>
  );
};

export default index;
