"use client";
import { useRef, useState } from "react";
import { Preview } from "./Preview";
import { Button } from "@/components/ui/button";
import { SERVER_API_URL, serverUrl } from "@/url";
import { redirect } from "next/navigation";

export default function Expenses() {
  const [previewExpense, setPreviewExpense] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const generateExpense = () => {
    setLoading(true);
    fetch(serverUrl("/expenses/generate"), {
      method: "POST",
      body: text,
    })
      .then((res) => res.json())
      .then((e) => setPreviewExpense(e))
      .finally(() => setLoading(false));
  };

  const saveExpense = (expense: any) => {
    return fetch(serverUrl("/expenses"), {
      method: "POST",
      body: JSON.stringify(expense), // TODO: add file links.
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setText("");
      setPreviewExpense(null);
    });
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col gap-2 p-4">
        <h1>Expense Tracker</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border w-[512px] p-4"
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
          variant="outline"
          onClick={() => alert("uploads not implemented yet!")}
        >
          Upload image
        </Button>
        <div className="mt-8">
          <b>Preview</b>
          <Preview expense={previewExpense} onSave={saveExpense} />
        </div>
      </div>
    </div>
  );
}
