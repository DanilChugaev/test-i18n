<template>
  <button 
    type="button"
    :class="classes"
    :style="style"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { computed } from 'vue';

import type { ButtonSize } from './types';

export default {
  props: {
    label: {
      type: String,
      required: true,
    },

    primary: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String as ButtonSize,
      default: 'medium',
    },
    
    backgroundColor: {
      type: String,
      default: '',
    },
  },

  setup(props, context) {
    const classes = computed(() => ({
      'storybook-button': true,
      'storybook-button--primary': props.primary,
      'storybook-button--secondary': !props.primary,
      [`storybook-button--${props.size}`]: true,
    }));

    const style = computed(() => ({
      backgroundColor: props.backgroundColor
    }));

    const onClick = () => context.emit('click', 1);

    return {
      classes,
      style,
      onClick,
    };
  },
};
</script>

<style lang="scss">
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  &--primary {
    color: white;
    background-color: #1ea7fd;
  }
  &--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  &--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &--large {
    font-size: 16px;
    padding: 12px 24px;
  }
}
</style>