import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Button',

  component: Button,
  
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },

  args: {
    label: 'text',
    primary: false,
  }, // default value

  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

export default meta;
