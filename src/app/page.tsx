import { Suspense } from "react";
import { ExpensesTable } from "../components/ExpensesTable";

export default function RootPage() {
  return (
    <div className="w-full h-screen flex justify-center">
      <Suspense fallback={<p className="mt-4">Loading...</p>}>
        <ExpensesTable />
      </Suspense>
    </div>
  );
}
