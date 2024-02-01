import { styled } from '@mui/material';
import { TextFieldProps } from './TextField';

export const ComponentContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'isStroked',
})<{ isStroked?: boolean }>`
    position: relative;
    width: 100%;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: ${({ theme }) => theme.spacing(1)};
        right: 100%;
        height: 1px;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.palette.secondary.main};
        z-index: 1;

        transition: right 0.3s ease-in-out;

        ${({ isStroked, theme }) =>
            isStroked &&
            `
            right: ${theme.spacing(1)};
        `}
    }
`;
