"use client";

import { useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState("");
  const [questions, setQuestions] = useState("");
  const generateQuestions = () => {
  setQuestions(`
1. What is the main topic?

2. Why is it important?

3. Multiple Choice:
A. Option A
B. Option B
C. Option C
`);
};
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold">AI Study Question Generator</h1>

      <p>
        Paste your notes and generate study questions instantly.
      </p>

      <textarea
  className="w-full border p-4 rounded"
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  placeholder="Paste your notes here..."
/>
      <button
  className="bg-black text-white px-4 py-2 rounded" onClick={generateQuestions}>
  Generate Questions
</button>
      {questions && (
  <pre className="border p-4 rounded mt-4">{questions}</pre>
)}
    </main>
  )
}