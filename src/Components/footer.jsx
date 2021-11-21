import React from 'react';
import {Button, IconButton} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from "react-router-dom";

export const Footer = (props) => {
    const navigate = useNavigate();
    return(
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
            <IconButton size={'large'} onClick={() => navigate('/')}>
                <HomeIcon />
            </IconButton>
            <Button size={'large'} onClick={() => navigate('/library')}>
                <LibraryBooksIcon/>
            </Button>
            <Button size={'large'} onClick={() => navigate('/user')}>
                <PersonIcon />
            </Button>
        </div>
        )
}
