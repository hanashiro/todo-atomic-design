import type { Meta, StoryObj } from '@storybook/react';

import TaskList from './TaskList';

const meta = {
    title: 'organism/data-display/TaskList',
    component: TaskList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: [
            {
                id: '1',
                title: 'Task 1',
                isDone: false,
            },
            {
                id: '2',
                title: 'Task 2',
                isDone: true,
            },
        ],
    },
};

export const Empty: Story = {
    args: {
        data: [],
    },
};
