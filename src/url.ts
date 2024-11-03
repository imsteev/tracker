export const SERVER_API_URL =
  process.env.SERVER_API_URL ?? "http://localhost:3000/api";

// path should start with "/"
export const serverUrl = (path: string) => `${SERVER_API_URL}${path}`;
