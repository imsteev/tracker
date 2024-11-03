const store = {};

export const db = {
  set(key: string, val: any) {
    // @ts-expect-error asdf
    store[key] = val;
  },
  get(key: string) {
    // @ts-expect-error asdf
    return store[key];
  },
};
