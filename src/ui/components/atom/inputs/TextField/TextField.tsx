import React from 'react';
import {
    TextField as MuiTextField,
    StandardTextFieldProps,
} from '@mui/material';

import { ComponentContainer } from './TextField.style';

export interface TextFieldProps extends StandardTextFieldProps {
    isStroked?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
    isStroked = false,
    ...props
}) => {
    return (
        <ComponentContainer isStroked={isStroked}>
            <MuiTextField {...props} fullWidth />
        </ComponentContainer>
    );
};

export default TextField;
