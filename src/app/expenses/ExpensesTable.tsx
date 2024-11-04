import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

export const ExpensesTable = ({ expenses }: { expenses: any[] }) => {
  return (
    <Table>
      <TableCaption>A list of your recent expenses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((e) => {
          return (
            <TableRow key={e.id}>
              <TableCell className="font-medium">{e.id}</TableCell>
              <TableCell>{e.date}</TableCell>
              <TableCell>{e.description}</TableCell>
              <TableCell className="text-right">{e.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
