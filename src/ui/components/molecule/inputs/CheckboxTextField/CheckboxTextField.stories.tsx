import type { Meta, StoryObj } from '@storybook/react';

import CheckboxTextField from './CheckboxTextField';

const meta = {
    title: 'molecule/inputs/CheckboxTextField',
    component: CheckboxTextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CheckboxTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checkbox: {
            checked: true,
        },
        textfield: {
            value: 'Value',
            label: 'Label',
        },
    },
};
