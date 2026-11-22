"use client";

import { useState } from "react";
import { input, sectionTitle } from "./styles";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (op = operation) => {
    const params = new URLSearchParams({ a, b, operation: op });
    try {
      const response = await fetch(`/api/lab5/calculator?${params}`);
      const json = await response.json();
      if (!response.ok) {
        setError(json.error ?? "Request failed");
        setResult("");
        return;
      }
      setError("");
      setResult(`${json.a} ${SYMBOLS[json.operation]} ${json.b} = ${json.result}`);
    } catch (e) {
      setError((e as Error).message);
      setResult("");
    }
  };

  return (
    <div id="wd-calculator-next-web-api">
      <h3 className={sectionTitle}>Calculator (Next.js Web API)</h3>
      <div className="my-2 flex items-center gap-2">
        <label htmlFor="wd-calc-a">A:</label>
        <input
          id="wd-calc-a"
          className={input}
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div className="my-2 flex items-center gap-2">
        <label htmlFor="wd-calc-b">B:</label>
        <input
          id="wd-calc-b"
          className={input}
          placeholder="B"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="my-2 flex items-center gap-2">
        <label htmlFor="wd-calc-operation">Operation:</label>
        <select
          id="wd-calc-operation"
          className={input}
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
            calculate(e.target.value);
          }}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
          <option value="modulo">% (invalid)</option>
        </select>
      </div>
      <button
        type="button"
        id="wd-calc-button"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={() => calculate()}
      >
        Calculate
      </button>
      {result && (
        <input
          id="wd-calc-result"
          readOnly
          className={`${input} ms-2`}
          value={result}
        />
      )}
      {error && (
        <p id="wd-calc-error" className="mt-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {error}
        </p>
      )}
      <hr className="my-4" />
    </div>
  );
}
