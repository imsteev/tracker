import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const expenseSchema = z.object({
  amount: z.number(),
  date: z.string(),
  category: z.string(),
  description: z.string(),
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const POST = async (request: Request) => {
  // const previewExpense = {
  //   amount: 10.52,
  //   date: new Date(),
  //   category: "Food",
  //   description: "Ramen Matsu - Cloister, NJ",
  // };

  // BELOW HITS OPEN AI
  const text = (await request.text()).trim();
  if (!text) {
    throw new Error("must provide content");
  }
  const completion = await openai.beta.chat.completions.parse({
    messages: [
      {
        role: "system",
        content: `Today is ${new Date().toDateString()}.\n` + systemPrompt,
      },
      { role: "user", content: text },
    ],
    model: "gpt-4o",
    response_format: zodResponseFormat(
      z.object({ expenses: z.array(expenseSchema) }),
      "expenses"
    ),
  });
  const previewExpense = completion.choices[0].message.parsed;
  return new Response(JSON.stringify(previewExpense));
};

const systemPrompt = `
You are an expert at expense bookkeeping, and knowledgeable about taxonomies.

Please respond to user requests by returning (potentially multiple) expenses with the shape:

- date (YYYY-MM-DD, default to today)
- amount (decimal, two-places)
- categories: (string)
- notes: (string, optional)
- files: (array[string, optional])

Use JSON please.
`;
