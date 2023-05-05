type HTMLElementEvent<T extends HTMLInputElement> = Event & {
  target: T;
}

export default () => {
  const useDark: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark: boolean = getDarkModeFromLocalStorage() === null
    ? useDark.matches
    : getDarkModeFromLocalStorage() === 'true';

  toggleDarkModeClass(isDark);

  useDark.addEventListener('change',mediaEvent => {
    // TODO: при изменении системной темы менять положение переключалки
    toggleDarkModeClass(mediaEvent.matches);
  });

  return (event: HTMLElementEvent<HTMLInputElement>): void | boolean => {
    if (event) {
      toggleDarkModeClass(event.target.checked);
    } else {
      return isDark;
    }
  };
};

const toggleDarkModeClass = (isDark: boolean) => {
  document.documentElement.classList.toggle('dark-mode', isDark);
  setDarkModeToLocalStorage(isDark);
};

const setDarkModeToLocalStorage = (isDark: boolean) => {
  localStorage.setItem('dark-mode', String(isDark));
};

const getDarkModeFromLocalStorage = (): string | null => {
  return localStorage.getItem('dark-mode');
};
