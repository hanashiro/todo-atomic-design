import { createTheme } from '@mui/material';
import commonTheme from './common-theme';

const theme = createTheme({
    ...commonTheme,
    palette: {
        mode: 'dark',
        primary: { main: '#65b2ff' },
        secondary: { main: '#f486c3' },
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
            paper: '#1f1f28',
        },
    },
});

export default theme;
