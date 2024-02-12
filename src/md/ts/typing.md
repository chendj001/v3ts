
<<< @/src/types/index.d.ts#PromiseT

```ts
// 示例
type A = PromiseT<string> // string
type B = PromiseT<Promise<string>> // string
type C = PromiseT<Promise<Promise<string>>> // string
```
