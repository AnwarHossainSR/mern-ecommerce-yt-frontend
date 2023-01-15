import {
  Avatar,
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
import { useDispatch } from 'react-redux';
import { categories } from '../../../constants/Categories';
import { createProductAction } from '../../../redux/actions/ProductAction';

const CreateProduct = ({ handleClose }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation of formData object

    if (formData?.name === '' || formData?.name === undefined)
      return setErrors({ ...errors, name: 'Name is required' });

    if (formData?.description === '' || formData?.description === undefined)
      return setErrors({ ...errors, description: 'Description is required' });

    if (formData?.price === '' || formData?.price === undefined)
      return setErrors({ ...errors, price: 'Price is required' });

    if (formData?.stock === '' || formData?.stock === undefined)
      return setErrors({ ...errors, stock: 'Stock is required' });

    if (formData?.category === '' || formData?.category === undefined)
      return setErrors({ ...errors, category: 'Category is required' });

    if (file === '' || file === undefined)
      return setErrors({ ...errors, image: 'image is required' });

    // call create product action
    dispatch(createProductAction({ ...formData, image: file }));
  };
  return (
    <Stack>
      <Typography variant="h4">Create Product</Typography>
      <Stack spacing={2}>
        <Stack direction="row" sx={{ gap: '3rem' }}>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData?.name ?? ''}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors?.name ? true : false}
            helperText={errors?.name ?? ''}
          />
          <TextField
            autoFocus
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={formData?.description ?? ''}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            error={errors?.description ? true : false}
            helperText={errors?.description ?? ''}
          />
        </Stack>
        <Stack direction="row" sx={{ gap: '3rem' }}>
          <TextField
            autoFocus
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            value={formData?.price ?? ''}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            error={errors?.price ? true : false}
            helperText={errors?.price ?? ''}
          />
          <TextField
            autoFocus
            margin="dense"
            name="discount"
            label="Discount"
            type="number"
            fullWidth
            variant="standard"
            value={formData?.discount ?? ''}
            onChange={(e) =>
              setFormData({ ...formData, discount: e.target.value })
            }
          />
        </Stack>
        <Stack direction="row" sx={{ gap: '3rem' }}>
          <TextField
            autoFocus
            margin="dense"
            name="stock"
            label="Stock"
            type="number"
            fullWidth
            variant="standard"
            value={formData?.stock ?? ''}
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
            error={errors?.stock ? true : false}
            helperText={errors?.stock ?? ''}
          />

          <FormControl variant="standard" sx={{ mt: 1, minWidth: '46%' }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData?.category ?? ''}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              error={errors?.category ? true : false}
              helperText={errors?.category ?? ''}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories.map((category) => (
                <MenuItem key={category?.cateName} value={category?.cateName}>
                  {category?.cateName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" sx={{ gap: '3rem' }}>
          <TextField
            autoFocus
            margin="dense"
            name="image"
            label="Image"
            type="file"
            width="70%"
            variant="standard"
            onChange={(e) => {
              setFile(e.target.files[0]);
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.onload = () => {
                setImage(reader.result);
              };
            }}
            error={errors?.image ? true : false}
            helperText={errors?.image ?? ''}
          />
          <Avatar
            alt=""
            src={image}
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '1rem',
          }}
          py={3}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Create
          </Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CreateProduct;
