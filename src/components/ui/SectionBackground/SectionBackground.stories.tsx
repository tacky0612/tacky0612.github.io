import type { Meta, StoryObj } from '@storybook/react';
import { SectionBackground } from './SectionBackground';

const meta = {
  title: 'UI/SectionBackground',
  component: SectionBackground,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    background: {
      control: 'select',
      options: ['white', 'gray', 'blue', 'green', 'transparent'],
    },
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'],
    },
    centered: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SectionBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Section Title</h2>
        <p className="text-gray-600">This is a section background component with default settings.</p>
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: <p>Section with small padding</p>,
  },
};

export const BlueBackground: Story = {
  args: {
    background: 'blue',
    children: (
      <div>
        <h3 className="text-xl font-semibold mb-2">Blue Section</h3>
        <p>This section has a blue background.</p>
      </div>
    ),
  },
};

export const MaxWidthSmall: Story = {
  args: {
    maxWidth: 'sm',
    children: <p>This section has a small maximum width.</p>,
  },
};

export const NotCentered: Story = {
  args: {
    centered: false,
    maxWidth: 'md',
    children: <p>This section is not centered.</p>,
  },
};

export const ProfileSection: Story = {
  args: {
    padding: 'lg',
    rounded: '3xl',
    background: 'gray',
    maxWidth: '4xl',
    children: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 bg-gray-300 rounded-3xl"></div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">John Doe</h2>
          <p className="text-gray-600">Software Engineer passionate about web development.</p>
        </div>
      </div>
    ),
  },
};