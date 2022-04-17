import { defineStore } from 'pinia'
import { getUser } from '@/api/user'
import { removeToken } from '@/utils/token'

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {},
    }
  },
  getters: {
    userId() {
      return this.userInfo?.id
    },
    username() {
      return this.userInfo?.username
    },
    avatar() {
      return this.userInfo?.avatar
    },
    role() {
      return this.userInfo?.role || []
    },
  },
  actions: {
    //获取用户信息
    async getUserInfo() {
      try {
        const res = await getUser()
        if (res.code === 0) {
          const { id, username, avatar, role } = res.data
          this.userInfo = { id, username, avatar, role }
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res.message)
        }
      } catch (error) {
        console.error(error)
        return Promise.reject(error.message)
      }
    },
    //退出登录
    logout() {
      removeToken()
      this.userInfo = {}
    },
    //设置用户信息
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  },
})
