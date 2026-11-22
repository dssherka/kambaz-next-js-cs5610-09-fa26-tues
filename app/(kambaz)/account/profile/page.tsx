"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const [message, setMessage] = useState("");
  const { currentUser, setCurrentUser, loading } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the book copies currentUser into local state here
    setProfile(currentUser);
  }, [currentUser, loading, router]);

  const updateProfile = async () => {
    if (!profile) return;
    try {
      const updatedProfile = await client.updateUser(profile);
      setCurrentUser(updatedProfile);
      setMessage("Profile updated");
    } catch (e) {
      setMessage((e as Error).message);
    }
  };

  const signout = async () => {
    try {
      await client.signout();
    } finally {
      setCurrentUser(null);
      router.push("/account/signin");
    }
  };

  if (!profile) return null;
  const input = "mb-2 w-full rounded border border-neutral-300 px-3 py-1.5 text-sm";
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        id="wd-username"
        className={input}
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        type="password"
        className={input}
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        placeholder="First Name"
        className={input}
        value={profile.firstName ?? ""}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        placeholder="Last Name"
        className={input}
        value={profile.lastName ?? ""}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-dob"
        type="date"
        className={input}
        value={profile.dob ?? ""}
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        placeholder="Email"
        className={input}
        value={profile.email ?? ""}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        id="wd-role"
        className={input}
        value={profile.role ?? "STUDENT"}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      {message && <p className="mb-2 text-sm text-green-700">{message}</p>}
      <button
        type="button"
        onClick={updateProfile}
        id="wd-update-profile-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white"
      >
        Update
      </button>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white"
      >
        Sign out
      </button>
    </div>
  );
}
