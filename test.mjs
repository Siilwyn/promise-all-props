import test from 'tape'
import { promiseAllProps } from './main.mjs';

test('wait for fulfilled object properties', function (t) {
  t.plan(1);

  promiseAllProps({
    foo: Promise.resolve('foo'),
    bar: Promise.resolve('bar')
  }).then(function (result) {
    t.deepEqual(result, { foo:'foo', bar:'bar' });
  });
});

test('reject promise on rejected object properties', function (t) {
  t.plan(1);

  promiseAllProps({
    foo: Promise.resolve('foo'),
    bar: Promise.reject('bar')
  }).catch(function (error) {
    t.equal(error, 'bar');
  });
});
