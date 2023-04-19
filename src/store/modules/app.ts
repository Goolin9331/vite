import { defineStore } from "pinia";
interface AppState {
  count: number;
}
export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    count: 0,
  }),
  getters: {
    getCount(): number {
      return this.count;
    },
  },
  actions: {
    setCount(count: number): void {
      this.count = count;
    },
  },
});
