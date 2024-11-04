"use client";
import { useFormStatus } from "react-dom";
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
    <form action={onSave.bind(null, expense)}>
      <hr className="border border-black" />
      <Expense expense={expense} />
      <div className="flex justify-end mt-4">
        <Button
          variant="ghost"
          onClick={() => alert("uploads not implemented yet!")}
        >
          Add more files
        </Button>
        <Submit />
      </div>
    </form>
  );
};

const Submit = () => {
  const status = useFormStatus();
  return (
    <Button type="submit" disabled={status.pending}>
      {status.pending ? "Saving.." : "Save"}
    </Button>
  );
};
