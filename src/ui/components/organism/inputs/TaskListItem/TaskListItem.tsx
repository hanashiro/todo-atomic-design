import CheckboxTextField from '@components/molecule/inputs/CheckboxTextField/CheckboxTextField';
import { IconButton, ListItem, Tooltip } from '@mui/material';
import React from 'react';
// import {  } from '@mui/material';
// import { Component } from './TaskListItem.style';

export interface TaskListItemProps {
    isChecked: boolean;
    onCheckChange: (isChecked: boolean) => void;
    value: string;
    onValueChange: (value: string) => void;
    onDelete: () => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
    isChecked,
    onCheckChange,
    value,
    onValueChange,
    onDelete,
}) => {
    return (
        <ListItem
            disableGutters
            secondaryAction={
                <Tooltip title="Delete" arrow>
                    <IconButton
                        edge="end"
                        aria-label="comments"
                        tabIndex={-1}
                        onClick={onDelete}
                    >
                        <i className="fas fa-fw fa-trash-alt" />
                    </IconButton>
                </Tooltip>
            }
        >
            <CheckboxTextField
                checkbox={{
                    checked: isChecked,
                    onChange(event, checked) {
                        onCheckChange(checked);
                    },
                }}
                textfield={{
                    value,
                    onChange(event) {
                        onValueChange(event.target.value);
                    },
                }}
            />
        </ListItem>
    );
};

export default TaskListItem;
