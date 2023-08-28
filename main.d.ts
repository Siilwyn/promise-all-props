export function promiseAllProps<
  PromisesObject extends Record<string, Promise<unknown>>,
>(
  objectWithPromises: PromisesObject,
): {
  [Key in keyof PromisesObject]: PromisesObject[Key] extends Promise<
    infer Result
  >
    ? Result
    : never;
};

