<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <ui-button @click="increment" >
      {{ $t("common.increase") }}
    </ui-button>
    <div>{{ $t('module.result', { count }) }}</div>

    <ui-switch v-model="isDark" @change="toggleDarkMode"/>
    <div>{{ $t('isDarkTheme', { isDark }) }}</div>

    <div>
      <ui-input
        v-focus
        v-model="text"
        @keyup.enter="log"
      />
      <ui-button
        @click="log"
      >
        {{ $t("common.button") }}
      </ui-button>
    </div>

    <div>
      {{ text }}
    </div>

    <div>
      <h1>{{ $t("common.hello") }}</h1>
      <p>{{ $d(new Date()) }}</p>

      <select v-model="$i18n.locale" @change="setLocale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>


    <router-link :to="`${$basePath}/`">{{ $t("common.index") }}</router-link>
    <br>
    <router-link :to="`${$basePath}/home`">{{ $t("common.home") }}</router-link>
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
    const setLocale = (event) => {
      localStorage.setItem('locale', event.target.value);
    };

    return {
      text,
      count,
      isDark,
      increment,
      log,
      setLocale,
      toggleDarkMode,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
