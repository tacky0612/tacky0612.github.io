import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const meta = {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="py-16">
        <div className="bg-gray-100 rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Page Content</h1>
          <p className="text-gray-600">
            This is example content wrapped in the Layout component.
            The Layout provides a consistent header and footer across all pages.
          </p>
        </div>
      </div>
    ),
  },
};

export const WithMultipleSections: Story = {
  args: {
    children: (
      <>
        <section className="py-16">
          <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">First Section</h2>
            <p className="text-gray-600">
              This demonstrates how the Layout component handles multiple sections.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="bg-green-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Second Section</h2>
            <p className="text-gray-600">
              Each section maintains proper spacing and alignment within the layout.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="bg-yellow-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Third Section</h2>
            <p className="text-gray-600">
              The footer always stays at the bottom, even with minimal content.
            </p>
          </div>
        </section>
      </>
    ),
  },
};

export const WithMinimalContent: Story = {
  args: {
    children: (
      <div className="py-8">
        <p className="text-center text-gray-600">Minimal content to test footer positioning.</p>
      </div>
    ),
  },
};

export const WithLongContent: Story = {
  args: {
    children: (
      <div className="py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Section {i + 1}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export const Empty: Story = {
  args: {
    children: null,
  },
};