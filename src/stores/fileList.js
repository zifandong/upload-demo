import { defineStore } from 'pinia'

export const useFileStore = defineStore({
  id: 'fileStore',
  state: () => ({ fileList: [] }),
  actions: {
    setFileList(list) {
      this.fileList = list
    },
  },
})
