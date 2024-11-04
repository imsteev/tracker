import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { expenses } from "@/db/schema";
import { db } from "@/db/setup";
import { desc } from "drizzle-orm";

export const ExpensesTable = async () => {
  const es = await db.select().from(expenses).orderBy(desc(expenses.date));
  return (
    <Table>
      <TableCaption>A list of your recent expenses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead className="text-nowrap">Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {es.map((e) => {
          return (
            <TableRow key={e.id}>
              <TableCell className="font-medium">{e.id}</TableCell>
              <TableCell className="text-nowrap">{e.date}</TableCell>
              <TableCell>{e.description}</TableCell>
              <TableCell className="text-right">{e.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
