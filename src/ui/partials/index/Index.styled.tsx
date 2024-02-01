import { Paper, styled } from '@mui/material';

export const Banner = styled('div')`
    width: 100vw;
    height: 300px;
    margin-top: ${({ theme }) => theme.spacing(-3)};
    margin-bottom: ${({ theme }) => theme.spacing(-28)};
    background-image: ${({ theme }) =>
        theme.palette.mode === 'light'
            ? 'url(/img/background/blue-background.webp)'
            : 'url(/img/background/purple-background.webp)'};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transition: background-image 0.5s ease-in-out;
`;

export const ListPaper = styled(Paper)`
    padding: ${({ theme }) => theme.spacing(2)};
    width: 100%;
    max-width: 45rem;
    backdrop-filter: blur(10px);

    background-color: ${({ theme }) =>
        theme.palette.mode === 'light' ? '#ffffff8f' : '#24202ec9'};
`;
