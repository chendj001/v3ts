import { defineStore } from "pinia";
import { version } from '@/../package.json'

export interface IAppConfig {
  version: string
}

const useAppConfigStore = defineStore('app-config', {
  state: (): IAppConfig => {
    return {
      version: version
    }
  },
  actions: {
    /**
     * 更新
     */
    update(config: Partial<IAppConfig>) {
      return new Promise<Partial<IAppConfig>>(resolve => {
        for (let attr in config) {
          // @ts-ignore
          this[attr] = config[attr]
        }
        resolve(config)
      })
    },
  },
  presist: {
    enable: true,
    resetToState: true,
  }
})
export default useAppConfigStore