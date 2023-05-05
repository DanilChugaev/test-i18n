import type { Meta, StoryObj } from '@storybook/vue3';

import UiSwitch from '../ui-switch.vue';

const meta = {
  title: 'ui/switch',

  component: UiSwitch,

  render: (args: any) => ({
    components: { UiSwitch },

    setup() {
      return { args };
    },

    template: `
      <div>
        <ui-switch v-model="args.value" />
        {{ args.value }}
      </div>
    `,
  }),

  tags: ['autodocs'],
} satisfies Meta<typeof UiSwitch>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
