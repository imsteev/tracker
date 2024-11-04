import { db } from "@/db/setup";
import { desc } from "drizzle-orm";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { expenses } from "@/db/schema";
import { ExpensesTable } from "./ExpensesTable";

export default async function Expenses() {
  const es = await db.select().from(expenses).orderBy(desc(expenses.date));
  return (
    <div className="w-full h-screen flex justify-center">
      <ExpensesTable expenses={es} />
    </div>
  );
}
