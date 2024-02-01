import { Box, Link, Typography } from '@mui/material';
import React from 'react';
// import {  } from '@mui/material';
// import { Component } from './Footer.style';

export interface FooterProps {
    children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <Box
            component={'footer'}
            bgcolor={'background.paper'}
            sx={{ mt: 'auto', px: 2, py: 1 }}
        >
            <Typography variant="body2" align="center">
                Made with <i className="fas fa-heart" /> by{' '}
                <Link
                    href="https://hanashiro.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Akira Hanashiro
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
