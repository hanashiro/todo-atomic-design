import { produce } from 'immer';
import { ITaskItem } from '@typing/TaskItem';

export class TaskService {
    private static create(): ITaskItem {
        return {
            id: window.crypto.randomUUID(),
            title: '',
            isDone: false,
        };
    }

    static addOnTop(taskList: ITaskItem[]) {
        return [TaskService.create(), ...taskList];
    }

    static addOnBottom(taskList: ITaskItem[]) {
        return [...taskList, TaskService.create()];
    }

    static remove(taskId: string, taskList: ITaskItem[]) {
        return taskList.filter((task) => task.id !== taskId);
    }

    static update(updatedTask: ITaskItem, taskList: ITaskItem[]): ITaskItem[] {
        return produce(taskList, (draft) => {
            const index = draft.findIndex((task) => task.id === updatedTask.id);
            if (index !== -1) {
                draft[index] = updatedTask;
            }
        });
    }

    static setAllDone(taskList: ITaskItem[]) {
        return taskList.map((task) => ({ ...task, isDone: true }));
    }

    static setAllUndone(taskList: ITaskItem[]) {
        return taskList.map((task) => ({ ...task, isDone: false }));
    }

    static clearCompleted(taskList: ITaskItem[]) {
        return taskList.filter((task) => !task.isDone);
    }
}
