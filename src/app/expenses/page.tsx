import { ExpensesTable } from "./ExpensesTable";
import { Suspense } from "react";

export default async function Expenses() {
  return (
    <div className="w-full h-screen flex justify-center">
      <Suspense fallback={<p className="mt-4">Loading...</p>}>
        <ExpensesTable />
      </Suspense>
    </div>
  );
}
