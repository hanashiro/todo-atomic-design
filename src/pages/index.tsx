import { GetStaticProps } from 'next';
import { Button, Paper, Stack } from '@mui/material';
import TaskList from '@components/organism/data-display/TaskList/TaskList';
import { NextPageWithLayout } from '@typing/_app';

import SingleColumn from '@templates/single-column/SingleColumn';
import { Banner, ListPaper } from '@partials/index/Index.styled';
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
                py: 2,
            }}
            justifyContent={'center'}
            alignItems={'center'}
            gap={5}
        >
            <Banner />
            <Stack direction={'row'} gap={2}>
                <Button variant="contained" onClick={checkAllTasks}>
                    Check All
                </Button>
                <Button variant="contained" onClick={uncheckAllTasks}>
                    Uncheck All
                </Button>
                <Button variant="contained" onClick={clearCompletedTasks}>
                    Clear Completed
                </Button>
            </Stack>
            <ListPaper>
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
            </ListPaper>
        </Stack>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    };
};

Index.getLayout = SingleColumn;
