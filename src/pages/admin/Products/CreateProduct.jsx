import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { categories } from '../../../constants/categories';

const CreateProduct = ({ handleClose }) => {
  const [category, setCategory] = useState('');
  return (
    <Stack>
      <Typography variant="h5">Create Product</Typography>
      <Stack>
        <Box
          sx={{ width: '100%' }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Stack spacing={2}>
            <Stack direction="row" sx={{ gap: '3rem' }}>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                fullWidth
                variant="standard"
                // defaultValue={formData?.name ?? ''}
                // disabled={disable}
                // onChange={handleChange}
                // error={errors?.name !== undefined}
                // helperText={errors?.name}
              />
              <TextField
                autoFocus
                margin="dense"
                name="description"
                label="Description"
                fullWidth
                variant="standard"
                // defaultValue={formData?.name ?? ''}
                // disabled={disable}
                // onChange={handleChange}
                // error={errors?.name !== undefined}
                // helperText={errors?.name}
              />
            </Stack>
            <Stack direction="row" sx={{ gap: '3rem' }}>
              <TextField
                autoFocus
                margin="dense"
                name="price"
                label="Price"
                fullWidth
                variant="standard"
                type="number"
                // defaultValue={formData?.name ?? ''}
                // disabled={disable}
                // onChange={handleChange}
                // error={errors?.name !== undefined}
                // helperText={errors?.name}
              />
              <TextField
                autoFocus
                margin="dense"
                name="discount"
                label="Discount"
                fullWidth
                variant="standard"
                type="number"
                // defaultValue={formData?.name ?? ''}
                // disabled={disable}
                // onChange={handleChange}
                // error={errors?.name !== undefined}
                // helperText={errors?.name}
              />
            </Stack>
            <Stack direction="row" sx={{ gap: '3rem' }}>
              <TextField
                autoFocus
                margin="dense"
                name="stock"
                label="Stock"
                fullWidth
                variant="standard"
                type="number"
                // defaultValue={formData?.name ?? ''}
                // disabled={disable}
                // onChange={handleChange}
                // error={errors?.name !== undefined}
                // helperText={errors?.name}
              />
              <FormControl variant="standard" sx={{ mt: 1, minWidth: '46%' }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                >
                  {categories &&
                    categories.map((category, index) => (
                      <MenuItem value={category.cateName} key={index}>
                        {category.cateName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" sx={{ gap: '3rem' }}>
              {/* file upload */}
              <TextField
                autoFocus
                margin="dense"
                name="image"
                label="Image"
                width="50%"
                variant="standard"
                type="file"
              />
              <Avatar sx={{ width: 90, height: 90 }} src="" />
            </Stack>
            <Stack
              sx={{
                gap: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              py={3}
            >
              <Button variant="contained">Create</Button>
              <Button color="error" onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CreateProduct;
