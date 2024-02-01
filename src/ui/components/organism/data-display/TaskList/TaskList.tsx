import TaskListItem from '@components/organism/inputs/TaskListItem/TaskListItem';
import { List, Typography } from '@mui/material';
import { ITaskItem } from '@typing/TaskItem';
import React from 'react';
// import {  } from '@mui/material';
// import { Component } from './TaskList.style';

export interface TaskListProps {
    data: ITaskItem[];
    onTaskChange: (task: ITaskItem) => void;
    onTaskDelete: (task: ITaskItem) => void;
}

const TaskList: React.FC<TaskListProps> = ({
    data,
    onTaskChange,
    onTaskDelete,
}) => {
    if (data.length !== 0) {
        return (
            <List>
                {data.map((task) => (
                    <TaskListItem
                        key={task.id}
                        isChecked={task.isDone}
                        onCheckChange={(isChecked) =>
                            onTaskChange({ ...task, isDone: isChecked })
                        }
                        value={task.title}
                        onValueChange={(value) =>
                            onTaskChange({ ...task, title: value })
                        }
                        onDelete={() => onTaskDelete(task)}
                    />
                ))}
            </List>
        );
    }

    return (
        <Typography align="center" sx={{ my: 2 }}>
            No tasks yet
        </Typography>
    );
};

export default TaskList;
