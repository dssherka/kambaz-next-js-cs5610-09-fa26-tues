"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountPage() {
  const { currentUser, loading } = useAccountContext();
  const router = useRouter();
  useEffect(() => {
    if (loading) return;
    router.replace(currentUser ? "/account/profile" : "/account/signin");
  }, [currentUser, loading, router]);
  return null;
}
