import type { Meta, StoryObj } from '@storybook/react';
import Links from './index';

const meta = {
  title: 'Sections/Links',
  component: Links,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
