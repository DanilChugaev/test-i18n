import type { Meta, StoryObj } from '@storybook/vue3';

import IconMoon from '../icons/moon.vue';

const meta = {
  title: 'icons/moon',

  component: IconMoon,
} satisfies Meta<typeof IconMoon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
