"use client";

import { useEffect, useState } from "react";
import * as client from "./client";
import { sectionTitle, subTitle } from "./styles";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  const [error, setError] = useState("");

  const fetchWelcomeOnClick = async () => {
    try {
      const message = await client.fetchWelcomeMessage();
      setWelcomeOnClick(message);
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  };
  const fetchWelcomeOnLoad = async () => {
    try {
      const welcome = await client.fetchWelcomeMessage();
      setWelcomeOnLoad(welcome);
    } catch (e) {
      setError((e as Error).message);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch on load, as in §5.2.5.4
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div id="wd-http-client">
      <h3 className={sectionTitle}>HTTP Client</h3>
      <h4 className={subTitle}>Requesting on Click</h4>
      <button
        type="button"
        id="wd-fetch-welcome"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={fetchWelcomeOnClick}
      >
        Fetch Welcome
      </button>
      <p className="mt-2">
        Response from server: <b>{welcomeOnClick}</b>
      </p>
      <h4 className={subTitle}>Requesting on Load</h4>
      <p>
        Response from server: <b>{welcomeOnLoad}</b>
      </p>
      {error && <p className="text-red-600">{error}</p>}
      <hr className="my-4" />
    </div>
  );
}
