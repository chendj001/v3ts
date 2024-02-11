// #region PromiseT
/**
 * 推导Promise的返回值
 */
export type PromiseT<T> = T extends Promise<infer K> ? PromiseT<K> : T
// #endregion PromiseT
