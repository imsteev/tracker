import { drizzle } from "drizzle-orm/neon-http";
export const db = drizzle(process.env.DATABASE_URL!);

// const store = { _key: crypto.randomUUID() };

// Why is @store different across routes?

// export const db = {
//   set(key: string, val: any) {
//     console.log("set", { store });
//     // @ts-expect-error asdf
//     store[key] = val;
//   },
//   get(key: string) {
//     console.log("get", { store });
//     // @ts-expect-error asdf
//     return store[key];
//   },
//   all() {
//     return store;
//   },
// };
