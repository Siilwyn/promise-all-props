# promise-all-props
[![Travis Build Status][travis-icon]][travis]
[![David devDependencies Status][david-dev-icon]][david-dev]

Inspired by [bluebird's `Promise.props`](http://bluebirdjs.com/docs/api/promise.props.html).

Like `Promise.all` but for object properties instead of iterated values. Returns a promise that is fulfilled when all the properties of the object are fulfilled. The promise's fulfillment value is an object with fulfilled values at respective keys to the original object. If any promise in the object rejects, the returned promise is rejected.

## Install
`npm install promise-all-props --save`

## Usage example
```js
const promiseAllProps = require('promise-all-props');

promiseAllProps({
    foo: Promise.resolve('foo'),
    bar: Promise.resolve('bar')
}).then(function(result) {
    console.log(result.foo, result.bar);
});
```

[travis]: https://travis-ci.org/Siilwyn/promise-all-props
[travis-icon]: https://img.shields.io/travis/Siilwyn/promise-all-props/master.svg?style=flat-square
[david-dev]: https://david-dm.org/Siilwyn/promise-all-props#info=devDependencies
[david-dev-icon]: https://img.shields.io/david/dev/Siilwyn/promise-all-props.svg?style=flat-square
