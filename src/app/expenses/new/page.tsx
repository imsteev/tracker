"use client";
import { useState } from "react";
import { Preview } from "./Preview";
import { Button } from "@/components/ui/button";
import { serverUrl } from "@/lib/url";
import { saveExpense } from "./actions";

export default function Expenses() {
  const [previewExpenses, setPreviewExpenses] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const generateExpense = async () => {
    setLoading(true);
    return fetch(serverUrl("/expenses/generate"), {
      method: "POST",
      body: text,
    })
      .then((res) => res.json())
      .then((e) => setPreviewExpenses(e.expenses))
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col gap-2 py-4 w-full">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded-md p-4"
          placeholder="what did you purchase?"
        ></textarea>
        <Button
          disabled={!text.trim() || loading}
          onClick={generateExpense}
          variant="secondary"
        >
          {loading ? "loading.." : "Generate"}
        </Button>
        <div className="self-center">or</div>
        <Button
          disabled={loading}
          onClick={() => alert("uploads not implemented yet!")}
          variant="outline"
        >
          Upload files
        </Button>
        <div className="mt-8">
          <b>Preview ({previewExpenses.length})</b>
          <div className="flex flex-col gap-4 mt-4">
            {previewExpenses.map((pe, i) => (
              <Preview key={i} expense={pe} onSave={saveExpense} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
