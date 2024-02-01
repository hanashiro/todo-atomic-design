import { ITaskItem } from '@typing/TaskItem';
import { TaskService } from './TaskService';
// import { faker } from '@faker-js/faker';

describe('TaskService', () => {
    let taskList = [] as ITaskItem[];
    beforeEach(() => {
        taskList = [
            { id: '1', title: 'Task 1', isDone: false },
            { id: '2', title: 'Task 2', isDone: true },
        ];
        jest.clearAllMocks();
    });

    it('should add a task on top of the list', () => {
        const newId = 'mocked-uuid';
        window.crypto.randomUUID = jest.fn().mockReturnValue(newId);

        const updatedList = TaskService.addOnTop(taskList);
        expect(updatedList).toHaveLength(3);
        expect(updatedList[0].id).toBe(newId);
    });

    it('should add a task on bottom of the list', () => {
        const newId = 'mocked-uuid';
        window.crypto.randomUUID = jest.fn().mockReturnValue(newId);

        const updatedList = TaskService.addOnBottom(taskList);
        expect(updatedList).toHaveLength(3);
        expect(updatedList.at(-1)!.id).toBe(newId);
    });

    it('should remove a task from the list', () => {
        const taskIdToRemove = '1';
        const updatedList = TaskService.remove(taskIdToRemove, taskList);
        expect(updatedList).toHaveLength(1);
        expect(updatedList[0].id).toBe('2');
    });

    it('should update a task in the list', () => {
        const updatedTask = {
            ...taskList[1],
            title: 'Updated Task',
        };

        const updatedList = TaskService.update(updatedTask, taskList);
        expect(updatedList).toHaveLength(2);
        expect(updatedList[1].title).toBe(updatedTask.title);
    });

    it('should set all tasks as done', () => {
        const updatedList = TaskService.setAllDone(taskList);
        expect(updatedList).toHaveLength(2);
        expect(updatedList).toSatisfyAll((task) => task.isDone);
    });

    it('should set all tasks as undone', () => {
        const updatedList = TaskService.setAllUndone(taskList);
        expect(updatedList).toHaveLength(2);
        expect(updatedList).toSatisfyAll((task) => !task.isDone);
    });

    it('should clear all completed tasks', () => {
        expect(taskList).toHaveLength(2);

        const updatedList = TaskService.clearCompleted(taskList);
        expect(updatedList).toHaveLength(1);
        expect(updatedList).toSatisfyAll((task) => !task.isDone);
    });
});
