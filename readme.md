# promise-all-props
[![npm][npm-badge]][npm]
[![bundlephobia][bundlephobia-badge]][bundlephobia]

Inspired by [bluebird's `Promise.props`](http://bluebirdjs.com/docs/api/promise.props.html).

Like `Promise.all` but for object properties instead of iterated values. Returns a promise that is fulfilled when all the properties of the object are fulfilled. The promise's fulfillment value is an object with fulfilled values at respective keys to the original object. If any promise in the object rejects, the returned promise is rejected.

## Install
Node.js:  
`npm install promise-all-props`

Deno:  
`https://deno.land/x/promise_all_props`

## Usage example
```js
import { promiseAllProps } from 'promise-all-props';

promiseAllProps({
  foo: Promise.resolve('foo'),
  bar: Promise.resolve('bar')
}).then((result) => {
  console.log(result.foo, result.bar);
});
```

[npm]: https://npmjs.com/package/promise-all-props
[npm-badge]: https://tinyshields.dev/npm/promise-all-props.svg
[bundlephobia]: https://bundlephobia.com/package/promise-all-props
[bundlephobia-badge]: https://tinyshields.dev/bundlephobia/size/promise-all-props.svg
