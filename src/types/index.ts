export interface IGlobalProperties {
  /**
   * 版本
   */
  version: string
}
export interface IRouteMeta {
  /**
   * 标题
   */
  title?: string
  /**
   * 隐藏
   */
  hidden?: boolean
  /**
   * 外链
   */
  outLink?: string
  /**
   * 固定
   */
  affix?: boolean
  /**
   * 是否能缓存
   */
  cacheable?: boolean
  /**
   * 是否是默认路径或首页
   */
  isRootPath?: boolean
  /**
   * 图标前缀
   */
  iconPrefix?: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 标记
   */
  badge?: string | number
  /**
   * 是否为单页面
   */
  isSingle?: boolean
}