import { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SingleColumn from './SingleColumn';

const meta = {
    title: 'template/SingleColumn',
    component: (props) => SingleColumn(props.page),
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<{
    page: ReactNode;
}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        page: <div>SingleColumn Content</div>,
    }
};
