export const GET = () => {
  return new Response(
    JSON.stringify({
      id: 1,
      amount: 10.25,
      display: "$10.25",
      date: new Date(),
    })
  );
};

import { db } from "@/db/setup";

export const POST = async (request: Request) => {
  console.log({ db });
  const json = await request.json();
  json.id = `expense-${crypto.randomUUID()}`;
  db.set(json.id, json);
  return new Response(JSON.stringify(json));
};
