// import { IndexPageStore } from './Index.store';
// import { IndexPageLogic } from './Index.logic';

import { LocalStorage } from '@services/StorageService/StorageServiceService';
import { TaskService } from '@services/Task/TaskService';
import { ITaskItem } from '@typing/TaskItem';
import { useCallback, useEffect, useState } from 'react';

export function useIndexPage() {
    // #region [ Local State ]
    const [isStarted, setIsStarted] = useState(false);
    const [taskList, setTaskList] = useState([] as ITaskItem[]);
    // #endregion

    // #region [ Methods ]
    const addTaskOnTop = useCallback(() => {
        setTaskList(TaskService.addOnTop(taskList));
    }, [taskList]);

    const addTaskOnBottom = useCallback(() => {
        setTaskList(TaskService.addOnBottom(taskList));
    }, [taskList]);

    const removeTask = useCallback(
        (taskId: string) => {
            setTaskList(TaskService.remove(taskId, taskList));
        },
        [taskList],
    );

    const updateTask = useCallback(
        (taskItem: ITaskItem) => {
            setTaskList(TaskService.update(taskItem, taskList));
        },
        [taskList],
    );

    const checkAllTasks = useCallback(() => {
        setTaskList(TaskService.setAllDone(taskList));
    }, [taskList]);

    const uncheckAllTasks = useCallback(() => {
        setTaskList(TaskService.setAllUndone(taskList));
    }, [taskList]);

    const clearCompletedTasks = useCallback(() => {
        setTaskList(TaskService.clearCompleted(taskList));
    }, [taskList]);
    // #endregion

    // #region [ Effects ]
    useEffect(() => {
        const taskList = LocalStorage.instance.get('taskList', []);
        setTaskList(taskList);
        setIsStarted(true);
    }, []);

    useEffect(() => {
        if (isStarted) {
            LocalStorage.instance.set('taskList', taskList);
        }
    }, [taskList, isStarted]);

    // #endregion

    return {
        taskList,
        addTaskOnTop,
        addTaskOnBottom,
        removeTask,
        updateTask,
        checkAllTasks,
        uncheckAllTasks,
        clearCompletedTasks,
    };
}
