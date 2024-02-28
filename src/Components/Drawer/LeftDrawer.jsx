import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Icon, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
import TuneIcon from '@mui/icons-material/Tune';
import { useNavigate } from 'react-router-dom';
import MoreDialog from '../Dialog/MoreDialog';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LeftDrawer = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const [dialog, setDialog] = useState(false);

    const OptionsWithIcons = [
        { text: "Home", icon: <HomeIcon />, url: '/' },
        { text: "Search", icon: <SearchIcon />, url: '/search' },
        { text: "Explore", icon: <ExploreIcon />, url: '/explore' },
        { text: "Reels", icon: <MovieIcon />, url: '/reels' },
        { text: "Messages", icon: <MessageIcon />, url: '/messages' },
        { text: "Notifications", icon: <FavoriteIcon />, url: '/notifications' },
        { text: "Create", icon: <AddIcon />, url: '/create' },
        { text: "Profile", icon: <AccountCircleIcon />, url: '/profile' }
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 550);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Drawer
                anchor="left"
                open={isOpen}
                ModalProps={{
                    keepMounted: true,
                    BackdropProps: {
                        invisible: true,
                    },
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#000' : '#fff', // Set background color based on theme mode
                    },
                }}
            >
                <Box sx={{ width: 248 }} role="presentation" >
                    <Typography variant='h6' style={{
                        textAlign: 'start',
                        marginLeft: '15px',
                        marginTop: '40px',
                        marginBottom: '20px',
                        cursor: 'pointer',
                        fontSize: '35px',
                        letterSpacing: '0.005px'
                    }}>
                        {isMobile ? (
                            <Icon fontSize="large">
                                <InstagramIcon />
                            </Icon>
                        ) : (
                            '𝓘𝓷𝓽𝓻𝓸𝓿𝓮𝓻𝓽'
                        )}
                    </Typography>
                    <List>
                        {OptionsWithIcons.map((item, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton onClick={() => navigate(item.url)}>
                                    <ListItemIcon>
                                        <Icon>{item.icon}</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <ListItem style={{ marginTop: "360px" }}>
                            <ListItemButton onClick={() => setDialog(!dialog)}>
                                <ListItemIcon>
                                    <Icon><TuneIcon /></Icon>
                                </ListItemIcon>
                                <ListItemText primary={"More"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            {
                dialog === true && (
                    <MoreDialog openDialog={dialog} setDialog={setDialog} />
                )
            }
        </div>
    );
};

export default LeftDrawer;
