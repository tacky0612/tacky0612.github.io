import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';

const meta = {
  title: 'UI/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    containerized: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Section Title</h2>
        <p className="text-gray-600">This is a section with default settings.</p>
      </div>
    ),
  },
};

export const WithId: Story = {
  args: {
    id: 'about',
    children: (
      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">About Section</h2>
        <p>This section has an ID for navigation purposes.</p>
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <div className="bg-gray-100 p-4">
        <p>Section with small vertical padding.</p>
      </div>
    ),
  },
};

export const ExtraLargePadding: Story = {
  args: {
    padding: 'xl',
    children: (
      <div className="bg-gray-100 p-4">
        <p>Section with extra large vertical padding.</p>
      </div>
    ),
  },
};

export const Containerized: Story = {
  args: {
    containerized: true,
    children: (
      <div className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Containerized Section</h2>
        <p>This section's content is wrapped in a container with horizontal padding.</p>
      </div>
    ),
  },
};

export const MultipleSections: Story = {
  args: {
    children: null,
  },
  render: () => (
    <>
      <Section id="section1" padding="md" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">First Section</h2>
          <p>Content of the first section.</p>
        </div>
      </Section>
      <Section id="section2" padding="lg" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Second Section</h2>
          <p>Content of the second section.</p>
        </div>
      </Section>
      <Section id="section3" padding="md" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Third Section</h2>
          <p>Content of the third section.</p>
        </div>
      </Section>
    </>
  ),
};