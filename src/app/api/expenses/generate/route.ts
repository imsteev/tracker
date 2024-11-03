import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const expenseSchema = z.object({
  amount: z.number(),
  displayAmount: z.string(),
  date: z.string(),
  category: z.string(),
  description: z.string(),
});

console.log(process.env);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const POST = async (request: Request) => {
  // const previewExpense = {
  //   id: -1,
  //   amount: 10.52,
  //   displayAmount: "$10.52",
  //   date: new Date(),
  //   category: "Food",
  //   description: "Ramen Matsu - Cloister, NJ",
  // };

  // BELOW HITS OPEN AI
  const text = await request.text();
  const completion = await openai.beta.chat.completions.parse({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: text },
    ],
    model: "gpt-4o",
    response_format: zodResponseFormat(expenseSchema, "expense"),
  });
  const previewExpense = completion.choices[0].message.parsed;
  console.log(completion.choices[0]);

  return new Response(JSON.stringify(previewExpense));
};

const systemPrompt = `
You are an expert at expense bookkeeping, and knowledgeable about taxonomies.
Please respond to user requests by returning an expense with the shape:

- date (MM/DD/YYYY)
- amount (decimal, two-places)
- displayAmount (string, with dollar sign)
- categories: (string)
- notes: (string, optional)
- files: (array[string, optional])

Use JSON please.
`;
