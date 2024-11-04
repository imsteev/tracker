import { text, pgTable, date, decimal, serial } from "drizzle-orm/pg-core";
export const expenses = pgTable("expense", {
  id: serial().primaryKey(),
  date: date().notNull(),
  amount: decimal().notNull(),
  description: text(),
  category: text(),
});
