import { createTheme } from '@mui/material';
import commonTheme from './common-theme';
import lightTheme from './light-theme';

const theme = createTheme({
    ...commonTheme,
    palette: {
        mode: 'dark',
        primary: { main: '#8be9fd' },
        secondary: { main: '#ff79c6' },
        success: { main: '#00b894' },
        error: { main: '#f948b4' },
        warning: { main: '#fdcb6e' },
        info: { main: '#00cec9' },
        text: {
            primary: '#fff',
            secondary: '#bcc2cd',
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            default: '#24202e',
            paper: '#282a36',
        },
    },
});

export default theme;
