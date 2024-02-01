import { styled } from '@mui/material';
import { CheckboxTextFieldProps } from './CheckboxTextField';

export const ComponentContainer = styled('div')`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
`;
