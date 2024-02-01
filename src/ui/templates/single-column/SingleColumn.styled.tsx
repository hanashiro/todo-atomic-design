import { styled } from '@mui/material';

export const PageWrapper = styled('div')`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.background.default};
`;

export const MainContent = styled('main')`
    padding: ${({ theme }) => theme.spacing(1, 2, 1)};
    color: ${({ theme }) => theme.palette.text.primary};
`;
