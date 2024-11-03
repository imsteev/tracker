"use client";
import { useState } from "react";
import { Preview } from "./Preview";
import { Button } from "@/components/ui/button";
import { serverUrl } from "@/lib/url";

export default function Expenses() {
  const [previewExpense, setPreviewExpense] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const generateExpense = async () => {
    setLoading(true);
    return fetch(serverUrl("/expenses/generate"), {
      method: "POST",
      body: text,
    })
      .then((res) => res.json())
      .then((e) => setPreviewExpense(e))
      .finally(() => setLoading(false));
  };

  const saveExpense = async (expense: any) => {
    setLoading(true);
    return fetch(serverUrl("/expenses"), {
      method: "POST",
      body: JSON.stringify(expense), // TODO: add file links.
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setText("");
      })
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
          disabled={loading}
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
          <b>Preview</b>
          <Preview expense={previewExpense} onSave={saveExpense} />
        </div>
      </div>
    </div>
  );
}
