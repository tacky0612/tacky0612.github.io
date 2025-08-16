import type { Meta, StoryObj } from '@storybook/react';
import { FaReact, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { Card } from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headerBgColor: {
      control: 'select',
      options: ['bg-blue-600', 'bg-green-600', 'bg-gray-600', 'bg-purple-600', 'bg-red-600'],
    },
    headerTextColor: {
      control: 'select',
      options: ['text-white', 'text-black', 'text-gray-900'],
    },
    variant: {
      control: 'select',
      options: ['default', 'skill'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: (
      <div>
        <p className="text-gray-600">This is a basic card with custom content.</p>
        <p className="text-sm text-gray-500 mt-2">You can add any React components here.</p>
      </div>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    title: 'React',
    icon: <FaReact />,
    headerBgColor: 'bg-blue-600',
    headerTextColor: 'text-white',
    children: <p>A JavaScript library for building user interfaces.</p>,
  },
};

export const WithImage: Story = {
  args: {
    title: 'AWS',
    imageUrl: '/images/aws-logo.png',
    headerBgColor: 'bg-orange-600',
    headerTextColor: 'text-white',
    children: <p>Amazon Web Services cloud platform.</p>,
  },
};

export const SkillCard: Story = {
  args: {
    title: 'Python',
    icon: <FaPython />,
    items: [
      'Data Analysis with Pandas',
      'Machine Learning with Scikit-learn',
      'Web Development with Django',
      'API Development with FastAPI',
    ],
    headerBgColor: 'bg-blue-600',
    headerTextColor: 'text-white',
    variant: 'skill',
    className: 'w-64',
  },
};

export const CertificationCard: Story = {
  args: {
    title: 'AWS Solutions Architect',
    icon: <FaAws />,
    items: [
      'Cloud Architecture Design',
      'Security Best Practices',
      'Cost Optimization',
      'High Availability',
    ],
    headerBgColor: 'bg-green-600',
    headerTextColor: 'text-white',
    variant: 'skill',
    className: 'w-64',
  },
};

export const NoHeader: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">Content without header</h3>
        <p className="text-gray-600">This card has no header section, just body content.</p>
      </div>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    title: 'Custom Styled Card',
    icon: <FaDocker />,
    headerBgColor: 'bg-purple-600',
    headerTextColor: 'text-white',
    headerClassName: 'py-4',
    bodyClassName: 'p-6 bg-purple-50',
    children: (
      <div>
        <p className="text-purple-900">This card has custom header and body styling.</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Action Button
        </button>
      </div>
    ),
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card
        title="React"
        icon={<FaReact />}
        items={['Components', 'Hooks', 'Context API', 'Router']}
        headerBgColor="bg-blue-600"
        headerTextColor="text-white"
        variant="skill"
        className="w-64"
      />
      <Card
        title="Python"
        icon={<FaPython />}
        items={['Django', 'FastAPI', 'NumPy', 'Pandas']}
        headerBgColor="bg-green-600"
        headerTextColor="text-white"
        variant="skill"
        className="w-64"
      />
      <Card
        title="AWS"
        icon={<FaAws />}
        items={['EC2', 'S3', 'Lambda', 'RDS']}
        headerBgColor="bg-orange-600"
        headerTextColor="text-white"
        variant="skill"
        className="w-64"
      />
    </div>
  ),
};