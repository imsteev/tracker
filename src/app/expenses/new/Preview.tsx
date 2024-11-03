import { Expense } from "./Expense";
import { Button } from "@/components/ui/button";

export const Preview = ({
  expense,
  onSave,
}: {
  expense: any;
  onSave?: any;
}) => {
  if (expense == null || expense == undefined) {
    return null;
  }

  return (
    <>
      <hr className="border border-black" />
      <Expense expense={expense} />
      <div className="flex justify-end mt-4">
        <Button
          variant="ghost"
          onClick={() => alert("uploads not implemented yet!")}
        >
          Add more files
        </Button>
        <Button onClick={() => onSave(expense)}>Save</Button>
      </div>
    </>
  );
};
