"use client";

import { useEffect, useState } from "react";
import { sectionTitle } from "./styles";

export default function HelloRoute() {
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("/api/lab5/hello")
      .then((response) => response.json())
      .then(setData)
      .catch((e: Error) => setError(e.message));
  }, []);
  return (
    <div id="wd-hello-route">
      <h3 className={sectionTitle}>GET /api/lab5/hello (Next.js Route Handler)</h3>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>
      )}
      <hr className="my-4" />
    </div>
  );
}
