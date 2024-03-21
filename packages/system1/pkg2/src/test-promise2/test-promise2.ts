export const testPromise2 = (): Promise<boolean> => {
  return new Promise(resolve => {
    resolve(true);
  });
};
