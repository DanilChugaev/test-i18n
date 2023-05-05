<template>
    <label class="ui-switch">
        <input
            class="ui-switch__checkbox"
            type="checkbox"
            :checked="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
        />

        <span class="ui-switch__slider">
            <icon-moon class="ui-switch__icon" />
        </span>
    </label>
</template>

<script lang="ts">
import IconMoon from '~/components/icons/moon.vue';

export default {
  name: 'ui-switch',

  components: {
      IconMoon,
  },

  props: {
    modelValue: Boolean,
  },
};
</script>


<style lang="scss">
.ui-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: lightblue;
    border-radius: 34px;
    transition: 0.6s;

    &::before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      border-radius: 50%;
      transition: 0.4s;
    }
  }

  &__checkbox {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .ui-switch__slider {
      background-color: #1e2ea8;
    }

    &:checked + .ui-switch__slider::before {
      transform: translateX(26px);
    }
  }

  &__icon {
    transform: rotate(250deg);
    position: absolute;
    right: 6px;
    top: 7px;
  }
}
</style>
