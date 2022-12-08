import React, { useMemo, useRef, useState } from 'react';
import { 
    IconButton,
    Toolbar,
    Typography, Menu, MenuItem, ListItemIcon, ListItemText,
} from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import CustomAppBar from './CustomAppBar';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CalendarViewDayRoundedIcon from '@mui/icons-material/CalendarViewDayRounded';


const Options = ({handleDrawerOpen, handleDrawerClose, open: openNav}) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef();
    const anchorEl = useMemo(() => open ? buttonRef.current : null, [open]);
    const moreOptions = [
        {
            icon: InfoRoundedIcon,
            lebel: 'Détail',
            handleClick: openNav === 'detail' ? handleDrawerClose : handleDrawerOpen('detail'),
        },
        {
            icon: CalendarViewDayRoundedIcon,
            lebel: 'Vue rapide des pages',
            handleClick: openNav === 'pages' ? handleDrawerClose : handleDrawerOpen('pages'),
        },
        {
            icon: OpenInNewRoundedIcon,
            lebel: 'Ouvrir dans une nouvelle fenêtre'
        },
    ];

    return (
        <React.Fragment>
            <Menu id="more" 
                anchorEl={anchorEl} 
                keepMounted 
                open={open} 
                onClose={() => setOpen(false)}
            >
                {moreOptions.map((item, index) => (
                    <MenuItem 
                        key={index}
                        onClick={() => {
                            item.handleClick();
                            setOpen(false);
                        }}
                    >
                         <ListItemIcon>
                            <item.icon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{
                                variant: 'body2'
                            }}
                        >{item.lebel}</ListItemText>
                    </MenuItem>
                ))}
            
            </Menu>
            <IconButton 
                size='small' 
                ref={buttonRef}
                onClick={() => setOpen(true)}
            >
                <MoreVertRoundedIcon fontSize='small'/>
            </IconButton>
        </React.Fragment>
    );
};

export default function Header ({name, open, handleDrawerOpen, handleDrawerClose}) {

    return (
        <CustomAppBar 
            position="fixed"
            open={!!open}
            sx={{
                background: theme => `linear-gradient(
                    ${theme.palette.background.default} 0%, 
                    transparent)`
            }}
        >
            <Toolbar>
                <IconButton size='small'>
                    <ArrowBackRoundedIcon fontSize='small'/>
                </IconButton>
                <Typography variant="body2" sx={{mx:1, flexGrow: 1}}>
                    {name}
                </Typography>
                <IconButton size='small' sx={{mr:1}}>
                    <LocalPrintshopRoundedIcon fontSize='small'/>
                </IconButton>
                <IconButton size='small' sx={{mr:1}}>
                    <GetAppRoundedIcon fontSize='small'/>
                </IconButton>
                <Options
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerClose={handleDrawerClose}
                    open={open}
                />
            </Toolbar>
        </CustomAppBar>
    )
}