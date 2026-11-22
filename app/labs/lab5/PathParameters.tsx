"use client";

import { useState } from "react";
import { input, linkButton, sectionTitle } from "./styles";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3 className={sectionTitle}>Path Parameters</h3>
      <div className="my-2 flex gap-2">
        <input
          id="wd-path-parameter-a"
          className={input}
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          id="wd-path-parameter-b"
          className={input}
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <a
          id="wd-path-parameter-add"
          className={linkButton}
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-path-parameter-subtract"
          className={linkButton}
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-path-parameter-multiply"
          className={linkButton}
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
        >
          Multiply {a} &times; {b}
        </a>
        <a
          id="wd-path-parameter-divide"
          className={linkButton}
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
        >
          Divide {a} &divide; {b}
        </a>
      </div>
      <hr className="my-4" />
    </div>
  );
}
