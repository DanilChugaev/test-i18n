import type { Meta, StoryObj } from '@storybook/vue3';

import UiInput from '../ui-input.vue';

const meta = {
  title: 'ui/input',

  component: UiInput,

  render: (args: any) => ({
    components: { UiInput },

    setup() {
      return { args };
    },

    template: `
      <div>
        <ui-input v-model="args.value" />
        {{ args.value }}
      </div>
    `,
  }),

  tags: ['autodocs'],
} satisfies Meta<typeof UiInput>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
