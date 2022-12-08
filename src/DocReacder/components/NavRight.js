import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { drawerWidth } from '../utils/PDFLib';
import { Typography, useTheme } from '@mui/material';
import CustomDrawerHeader from './CustomDrawerHeader';

const titles = {
    detail: 'Détails',
    pages: 'Vue des rapide des pages'
}
export default function NavRight ({open, handleDrawerClose}) {
    const theme = useTheme();
    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={!!open}
      >
        <CustomDrawerHeader>
          <IconButton onClick={handleDrawerClose} size="small">
            {theme.direction === 'rtl' ? 
            <ChevronLeftRoundedIcon fontSize="small" /> : 
            <ChevronRightRoundedIcon fontSize="small"/>
            }
          </IconButton>
          <Typography sx={{flexGrow: 1, mx: 1}}>{titles[open]}</Typography>
        </CustomDrawerHeader>
        <Divider />
      </Drawer>
    )
}