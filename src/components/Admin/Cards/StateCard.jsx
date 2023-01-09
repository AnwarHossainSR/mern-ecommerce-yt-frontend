import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import { Stack, Typography } from '@mui/material';
const StateCard = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: '#1F2A40',
        width: '25%',
        gap: '5px',
      }}
      p={3}
    >
      <Stack>
        <BookmarkBorderIcon sx={{ color: '#3DA58A', fontSize: 31 }} />
        <Typography
          sx={{
            mt: 2,
          }}
        >
          1200$
        </Typography>
        <Typography variant="p" sx={{ color: '#3DA58A' }}>
          Total Sales
        </Typography>
      </Stack>
      <Stack>
        <DataSaverOffIcon
          sx={{
            fontSize: '3.5rem',
            color: '#3DA58A',
          }}
        />
      </Stack>
    </Stack>
  );
};

export default StateCard;
