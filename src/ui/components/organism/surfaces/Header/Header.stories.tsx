import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
    title: 'organism/surfaces/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isLightTheme: true,
        title: 'ToDo',
    },
};
