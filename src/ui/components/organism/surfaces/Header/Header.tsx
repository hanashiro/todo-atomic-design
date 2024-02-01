import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import { AppStore } from '@stores/AppStore';
import React from 'react';
// import {  } from '@mui/material';
// import { Component } from './Header.style';

export interface HeaderProps {
    title: string;
    isLightTheme: boolean;
    onThemeChange: () => void;
}

const Header: React.FC<HeaderProps> = ({
    title,
    isLightTheme,
    onThemeChange,
}) => {
    const nextThemeIcon = isLightTheme ? 'moon' : 'sun';
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography
                    color={'inherit'}
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    {title}
                </Typography>

                <Tooltip title={'Toggle Theme'} arrow>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="Change Theme"
                        sx={{ mr: 2 }}
                        onClick={onThemeChange}
                    >
                        <i className={`fas fa-fw fa-${nextThemeIcon}`} />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
