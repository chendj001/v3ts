#### eval

```js
//不推荐
eval('let a=1;let b=1;a+b') //2
// 推荐
Function('let a=1;let b=2;return a+b')() //3
```
