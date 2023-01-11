import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import { Stack, Typography } from '@mui/material';

const StateCard = ({ Icon, text, value }) => {
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
        <Icon sx={{ color: '#3DA58A', fontSize: 31 }} />
        <Typography
          sx={{
            mt: 2,
          }}
        >
          {value}
        </Typography>
        <Typography variant="p" sx={{ color: '#3DA58A' }}>
          {text}
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
