interface ConfigState {
  theme: string
}

export const useStore = defineStore('config', {
  persist: true,
  state: (): ConfigState => ({
    theme: 'light'
  }),
  actions: {
    setTheme(theme: string) {
      this.theme = theme
    }
  }
})
