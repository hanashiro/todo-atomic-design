import React from 'react';
import { Checkbox, CheckboxProps, StandardTextFieldProps } from '@mui/material';
import TextField from '@components/atom/inputs/TextField/TextField';
import { ComponentContainer } from './CheckboxTextField.style';

export interface CheckboxTextFieldProps {
    checkbox: CheckboxProps;
    textfield: StandardTextFieldProps;
}

const CheckboxTextField: React.FC<CheckboxTextFieldProps> = ({
    checkbox,
    textfield,
}) => {
    return (
        <ComponentContainer>
            <Checkbox tabIndex={-1} {...checkbox} />
            <TextField {...textfield} isStroked={checkbox.checked} />
        </ComponentContainer>
    );
};

export default CheckboxTextField;
