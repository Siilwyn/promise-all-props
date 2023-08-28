export function promiseAllProps (object) {
  return Promise.all(Object.values(object)).then((results) => (
    Object.keys(object).reduce((fulfilledObject, key, index) => {
      fulfilledObject[key] = results[index];
      return fulfilledObject;
    }, {})
  ));
}
