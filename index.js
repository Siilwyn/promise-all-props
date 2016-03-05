'use strict';

module.exports = function (object) {
  var keys = Object.keys(object);
  var values = [];

  for (let key in object) {
    let value = object[key];
    values.push(value);
  }

  return Promise.all(values).then(function (results) {
    return keys.reduce(function (fulfilledObject, key, index) {
      fulfilledObject[key] = results[index];

      return fulfilledObject;
    }, {});
  });
};
