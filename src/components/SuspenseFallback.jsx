import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

const SuspenseFallback = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      spacing={2}
      direction="row"
    >
      <CircularProgress />
    </Stack>
  );
};

export default SuspenseFallback;
