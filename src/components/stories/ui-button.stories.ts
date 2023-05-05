import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from '../ui-button.vue';

const meta = {
  title: 'ui/button',

  component: UiButton,
  
  argTypes: {
    type: {
      options: ['button', 'submit'],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },

  render: (args: any) => ({
    components: { UiButton },

    setup() {
      return { args };
    },

    template: '<ui-button :type="args.type" :disabled="args.disabled">Супер кнопка</ui-button>',
  }),

  tags: ['autodocs'],
} satisfies Meta<typeof UiButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export default meta;
