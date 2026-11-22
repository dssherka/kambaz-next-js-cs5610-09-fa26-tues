"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import * as client from "./client";

export type User = {
  _id: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
  role?: string;
  loginId?: string;
  section?: string;
  lastActivity?: string;
  totalActivity?: string;
};

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  /** true until the first /profile check finishes, so screens don't redirect too early */
  loading: boolean;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Session-style fetch (§5.4.2.4): restore the signed-in user after a reload.
  useEffect(() => {
    client
      .profile()
      .then((user) => setCurrentUser(user))
      .catch(() => setCurrentUser(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser, loading }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}
