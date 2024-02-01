import type { Meta, StoryObj } from '@storybook/react';

import TaskListItem from './TaskListItem';

const meta = {
    title: 'organism/inputs/TaskListItem',
    component: TaskListItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof TaskListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isChecked: true,
        value: 'Value',
    },
};

