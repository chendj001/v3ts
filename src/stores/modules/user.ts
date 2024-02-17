import { defineStore } from "pinia";

export interface IUser {
  userId: string;
  roleId: string;
  groupId: string;
  userName: string;
  nickName: string;
  token: string;
  avatar: string;
}


/**
 * 用户存储
 */
const useUserStore = defineStore('user', {
  state: (): IUser => {
    return {
      userId: '',
      roleId: '',
      groupId: '',
      userName: '',
      nickName: '',
      token: '',
      avatar: ''
    }
  },
  actions: {
    /**
     * 更新用户信息
     */
    update(user: Partial<IUser>) {
      return new Promise<Partial<IUser>>(resolve => {
        for (let attr in user) {
          // @ts-ignore
          this[attr] = user[attr]
        }
        resolve(user)
      })
    },
    updateByName(keyName: keyof IUser, value: any) {
      this[keyName] = value
    },
    /**
     * 清除用户信息
     */
    clear() {
      return new Promise<void>((resolve) => {
        this.$reset()
        localStorage.clear()
        sessionStorage.clear()
        resolve()
      })
    }
  },
  presist: {
    enable: true,
    resetToState: true,
  }
})
export default useUserStore