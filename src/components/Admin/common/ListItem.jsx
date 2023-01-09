import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const Item = ({ Icon, item, handleNavigate }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => handleNavigate(item?.path)}>
        <ListItemIcon>
          <Icon
            sx={{
              color: '#E0E0E0',
            }}
          />
        </ListItemIcon>
        <ListItemText primary={item?.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default Item;
