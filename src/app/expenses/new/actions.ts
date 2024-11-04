"use server";

import { expenses } from "@/db/schema";
import { db } from "@/db/setup";
import { revalidatePath } from "next/cache";

export async function saveExpense(json: any) {
  console.log(json);
  await db.insert(expenses).values(json.expenses);
  revalidatePath("/expenses/new");
}
