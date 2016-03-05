'use strict';

const test = require('tape');
const plugin = require('./index.js');

test('wait for fulfilled object properties', function (t) {
  t.plan(1);

  plugin({
    foo: Promise.resolve('foo'),
    bar: Promise.resolve('bar')
  }).then(function (result) {
    t.deepEqual(result, { foo:'foo', bar:'bar' });
  });
});

test('reject promise on rejected object properties', function (t) {
  t.plan(1);

  plugin({
    foo: Promise.resolve('foo'),
    bar: Promise.reject('bar')
  }).catch(function (error) {
    t.equal(error, 'bar');
  });
});
