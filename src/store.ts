import { defineStore } from 'pinia';

// Create a new store instance.
export const useCommonStore = defineStore('common', {
  state: () => ({
    count: 0,
  }),

  actions: {
    increment () {
      this.count += 1;
    },
  },
});

export default useCommonStore;