import { Button } from "@/components/ui/button";

export const Preview = ({ expense, onSave }: { expense: any; onSave: any }) => {
  if (expense == null || expense == undefined) {
    return null;
  }

  return (
    <>
      <hr className="border border-black" />
      <div className="flex flex-col">
        {Object.entries(expense)
          .toSorted()
          .map(([k, v]) => {
            return (
              <pre key={k}>
                <div className="flex justify-between py-2">
                  <div>{k}</div>
                  <div>{JSON.stringify(v)}</div>
                </div>
              </pre>
            );
          })}
        <div className="self-end gap-4">
          <Button
            variant="ghost"
            onClick={() => alert("uploads not implemented yet!")}
          >
            Add more files
          </Button>
          <Button onClick={() => onSave(expense)}>Save</Button>
        </div>
      </div>
    </>
  );
};
