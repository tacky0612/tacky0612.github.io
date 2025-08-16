import type { Meta, StoryObj } from '@storybook/react';
import { ExternalLink } from './ExternalLink';

const meta = {
  title: 'UI/ExternalLink',
  component: ExternalLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    showIcon: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ExternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://github.com',
    children: 'Visit GitHub',
  },
};

export const WithIcon: Story = {
  args: {
    href: 'https://github.com',
    children: 'Visit GitHub',
    showIcon: true,
  },
};

export const Primary: Story = {
  args: {
    href: 'https://github.com',
    children: 'Primary Link',
    variant: 'primary',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Secondary: Story = {
  args: {
    href: 'https://github.com',
    children: 'Secondary Link',
    variant: 'secondary',
  },
};

export const LongText: Story = {
  args: {
    href: 'https://example.com',
    children: 'This is a very long external link text that might wrap to multiple lines',
    showIcon: true,
  },
};

export const InParagraph: Story = {
  render: () => (
    <p className="text-gray-700 max-w-md">
      Check out my projects on{' '}
      <ExternalLink href="https://github.com" showIcon>
        GitHub
      </ExternalLink>{' '}
      and connect with me on{' '}
      <ExternalLink href="https://linkedin.com" showIcon>
        LinkedIn
      </ExternalLink>
      .
    </p>
  ),
};