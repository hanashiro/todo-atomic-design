import React, { PropsWithChildren, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import lightTheme from './light-theme';
import darkTheme from './dark-theme';
import { AppStore } from '@stores/AppStore';
import { LocalStorage } from '@services/StorageService/StorageServiceService';

const ThemeContainer: React.FC<PropsWithChildren> = ({ children }) => {
    const themeMode = AppStore.use.mode();

    useEffect(() => {
        const savedTheme = LocalStorage.instance.get('theme', 'dark') as
            | 'light'
            | 'dark';
        AppStore.set.mode(savedTheme);
    }, []);

    return (
        <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeContainer;
