import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: 'user', // 必须唯一
  state: () => {
    return {
      username: '',
      nickname: '阻塞'
    }
  }
})