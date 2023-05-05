import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import Router from './router';
import VFocus from './directives/v-focus';
import toggleDarkMode from './functions/toggleDarkMode';
import localization from './localization';
import customRule from './localization/customRule';
import dateTimeFormats from './localization/dateTimeFormats';

const app = createApp(App);
const pinia = createPinia();

const i18n = createI18n({
  locale: localStorage.getItem('locale') || navigator.language, // тут выставляем текущую локаль пользователя либо из localstorage доставать значение локали если туда что то сохранили
  fallbackLocale: 'ru', // set fallback locale
  messages: localization,
  pluralizationRules: {
    ru: customRule,
  },
  dateTimeFormats,
});

app.config.globalProperties.$basePath = import.meta.env.VITE_BASE_PATH;
app.provide('toggleDarkMode', toggleDarkMode());

app.directive(VFocus.name, VFocus);

app
  .use(pinia)
  .use(Router)
  .use(i18n)
  .mount('#app');
