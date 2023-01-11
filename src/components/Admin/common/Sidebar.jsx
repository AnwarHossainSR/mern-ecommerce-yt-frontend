import LogoutIcon from '@mui/icons-material/Logout';
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../../../constants/Data';
import { getAuthLogout } from '../../../redux/actions/UserAction';
import Item from './ListItem';

const Sidebar = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    dispatch(getAuthLogout());
  };

  return (
    <Stack
      sx={{
        width: '20%',
        backgroundColor: '#1F2A40',
        height: '100vh',
        position:'fixed'
      }}
      p={2}
    >
      <Typography variant="h5" sx={{ color: '#E0E0E0', textAlign: 'center' }}>
        {user?.name}
      </Typography>
      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        py={2}
      >
        <Avatar src={user?.avatar?.url} sx={{ width: 76, height: 76 }} />
      </Stack>
      <Stack>
        <List>
          {menuItems.map((item, index) => (
            <Item
              key={index}
              item={item}
              Icon={item.icon}
              handleNavigate={handleNavigate}
            />
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon
                  sx={{
                    color: 'red',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
