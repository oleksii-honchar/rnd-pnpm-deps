export const testPromise1 = (): Promise<boolean> => {
  return new Promise(resolve => {
    resolve(true);
  });
};
