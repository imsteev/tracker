export const GET = () => {
  const allExpenses = db.all();
  return new Response(
    JSON.stringify({
      expenses: db.all(),
      total: Object.values(allExpenses).reduce(
        (acc, cur) => acc + cur.amount,
        0
      ),
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
