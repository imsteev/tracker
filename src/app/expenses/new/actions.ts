"use server";

import { expenses } from "@/db/schema";
import { db } from "@/db/setup";
import { revalidatePath } from "next/cache";

export async function saveExpense(json: any) {
  console.log(json);
  await db.insert(expenses).values(json);
  revalidatePath("/expenses/new");

  // return fetch(serverUrl("/expenses"), {
  //   method: "POST",
  //   body: JSON.stringify(expense), // TODO: add file links.
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then(() => {
  //     setText("");
  //   })
  //   .finally(() => setLoading(false));
}
