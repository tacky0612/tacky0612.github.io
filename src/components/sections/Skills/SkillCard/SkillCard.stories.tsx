import type { Meta, StoryObj } from '@storybook/react';
import { FaReact, FaAws } from 'react-icons/fa';
import SkillCard from './index';

const meta = {
  title: 'Sections/Skills/SkillCard',
  component: SkillCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      control: 'select',
      options: ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-red-600'],
    },
  },
} satisfies Meta<typeof SkillCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    skill: 'React',
    icon: <FaReact />,
    items: ['Component-based architecture', 'Virtual DOM', 'Hooks and state management'],
    bgColor: 'bg-blue-600',
  },
};

export const WithImage: Story = {
  args: {
    skill: 'AWS',
    imageLink: '/images/aws-logo.png',
    items: ['Cloud infrastructure', 'Lambda functions', 'S3 storage'],
    bgColor: 'bg-green-600',
  },
};

export const ProgrammingSkill: Story = {
  args: {
    skill: 'TypeScript',
    icon: <FaAws />,
    items: ['Type safety', 'Better IDE support', 'Enhanced refactoring'],
    bgColor: 'bg-blue-600',
  },
};

export const Certification: Story = {
  args: {
    skill: 'AWS SAA-C03',
    icon: <FaAws />,
    items: ['2024年12月−合格', 'AWS認定ソリューションアーキテクト-アソシエイト'],
    bgColor: 'bg-green-600',
  },
};
