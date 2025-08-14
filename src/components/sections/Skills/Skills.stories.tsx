import type { Meta, StoryObj } from '@storybook/react';
import Skills from './index';

const meta = {
  title: 'Sections/Skills',
  component: Skills,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Expanded: Story = {
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll('button');
    buttons.forEach((button) => button.click());
  },
};
