import { GetStaticProps } from 'next';
import { Button, Paper, Stack } from '@mui/material';
import TaskList from '@components/organism/data-display/TaskList/TaskList';
import { NextPageWithLayout } from '@typing/_app';

import SingleColumn from '@templates/single-column/SingleColumn';
// import { Component } from '@partials/index/Index.styled';
import { useIndexPage } from '@partials/index/Index.hook';
// import { IndexPageLogic } from '@partials/index/Index.logic';
// import { IndexPageStore } from '@partials/index/Index.store';

type IndexProps = NextPageWithLayout & {
    title: string;
};

export default function Index(props: IndexProps) {
    const {
        taskList,
        addTaskOnTop,
        addTaskOnBottom,
        removeTask,
        updateTask,
        checkAllTasks,
        uncheckAllTasks,
        clearCompletedTasks,
    } = useIndexPage();

    return (
        <Stack
            sx={{
                mx: 'auto',
                my: 5,
                p: 2,
            }}
            justifyContent={'center'}
            alignItems={'center'}
            gap={5}
        >
            <Stack direction={'row'} gap={2}>
                <Button onClick={checkAllTasks}>Check All</Button>
                <Button onClick={uncheckAllTasks}>Uncheck All</Button>
                <Button onClick={clearCompletedTasks}>Clear Completed</Button>
            </Stack>
            <Paper sx={{ p: 2, width: '100%', maxWidth: '45rem' }}>
                <Button
                    endIcon={<i className="fas fa-plus" />}
                    fullWidth
                    onClick={addTaskOnTop}
                >
                    Add Task
                </Button>
                <TaskList
                    data={taskList}
                    onTaskChange={updateTask}
                    onTaskDelete={(taskItem) => removeTask(taskItem.id)}
                />
                <Button
                    endIcon={<i className="fas fa-plus" />}
                    fullWidth
                    onClick={addTaskOnBottom}
                >
                    Add Task
                </Button>
            </Paper>
        </Stack>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    };
};

Index.getLayout = SingleColumn;
