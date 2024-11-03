export const Expense = ({ expense }: { expense: any }) => {
  return (
    <>
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
      </div>
    </>
  );
};
