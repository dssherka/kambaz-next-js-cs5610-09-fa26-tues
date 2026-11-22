"use client";

import { useState } from "react";
import { input, linkButton, sectionTitle } from "./styles";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const url = (operation: string) =>
    `${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`;
  return (
    <div id="wd-query-parameters">
      <h3 className={sectionTitle}>Query Parameters</h3>
      <div className="my-2 flex gap-2">
        <input
          id="wd-query-parameter-a"
          className={input}
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          id="wd-query-parameter-b"
          className={input}
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <a id="wd-query-parameter-add" className={linkButton} href={url("add")}>
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className={linkButton}
          href={url("subtract")}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-query-parameter-multiply"
          className={linkButton}
          href={url("multiply")}
        >
          Multiply {a} &times; {b}
        </a>
        <a
          id="wd-query-parameter-divide"
          className={linkButton}
          href={url("divide")}
        >
          Divide {a} &divide; {b}
        </a>
      </div>
      <hr className="my-4" />
    </div>
  );
}
