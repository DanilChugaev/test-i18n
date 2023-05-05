<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <ui-button @click="increment" >
        увеличить
    </ui-button>
    <div> result - {{ count }} </div>

    <ui-switch v-model="isDark" @change="toggleDarkMode"/>
    <div> isDark - {{ isDark }} </div>

    <div>
      <ui-input
        v-focus
        v-model="text"
        @keyup.enter="log"
      />
      <ui-button
        @click="log"
      >
        Кнопка
      </ui-button>
    </div>

    <div>
      {{ text }}
    </div>

    <router-link :to="`${$basePath}/`">Index</router-link>
    <br>
    <router-link :to="`${$basePath}/home`">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, ref, inject } from 'vue';

import { useCommonStore } from '~/store';

import UiInput from '~/components/ui-input.vue';
import UiButton from '~/components/ui-button.vue';
import UiSwitch from './components/ui-switch.vue';

export default {
  name: 'App',

  components: {
    UiSwitch,
    UiInput,
    UiButton,
  },

  setup() {
    const toggleDarkMode = inject('toggleDarkMode');
    const store = useCommonStore();

    const text = ref('');
    const isDark = ref(toggleDarkMode());
    const count = computed(() => store.count);
    const increment = () => store.increment();
    const log = () => console.log(text.value);

    return {
      text,
      count,
      isDark,
      increment,
      log,
      toggleDarkMode,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
