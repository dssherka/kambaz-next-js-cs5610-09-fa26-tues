"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = async () => {
    if (!user.username || !user.password) {
      setError("Username and password are required");
      return;
    }
    try {
      const current = await client.signup(user);
      setCurrentUser(current);
      router.push("/account/profile");
    } catch (e) {
      const err = e as { response?: { data?: { message?: string } }; message: string };
      setError(err.response?.data?.message ?? err.message);
    }
  };

  const input = "mb-2 w-full rounded border border-neutral-300 px-3 py-1.5 text-sm";

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      {error && (
        <p id="wd-signup-error" className="mb-2 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${input}`}
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={`wd-password ${input}`}
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white"
      >
        Sign up
      </button>
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
