"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1", match: (p: string) => p.startsWith("/labs/lab1") },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2", match: (p: string) => p.startsWith("/labs/lab2") },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3", match: (p: string) => p.startsWith("/labs/lab3") },
  { href: "/labs/lab4", id: "wd-lab4-link", label: "Lab 4", match: (p: string) => p.startsWith("/labs/lab4") },
  { href: "/labs/lab5", id: "wd-lab5-link", label: "Lab 5", match: (p: string) => p.startsWith("/labs/lab5") },
  { href: "https://kambaz.dev/book/ch1", id: "wd-toc-book-link", label: "Chapter 1", match: () => false },
  { href: "/account", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  { href: "/dashboard", id: "wd-kambaz-dashboard-link", label: "Dashboard", match: () => false },
  { href: "https://kambaz.dev/book/ch3", id: "wd-book-ch3-link", label: "Book Ch3", match: () => false },
] as const;

// On Vercel this is the Render origin (§5.5.3); locally it is http://localhost:4000.
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const activeStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "4px",
  padding: "2px 8px",
  textDecoration: "none",
};

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-toc">
      <p>Daoud Sherkawi — &quot;Ship it, then polish it.&quot;</p>
      <ul>
        {LINKS.map((link) => {
          const active = link.match(pathname);
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                id={link.id}
                style={active ? activeStyle : undefined}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href="https://github.com/dssherka/kambaz-next-js-cs5610-09-fa26-tues"
            id="wd-github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/dssherka/webdev-server"
            id="wd-github-server"
            target="_blank"
            rel="noreferrer"
          >
            Server GitHub
          </Link>
        </li>
        <li>
          <a
            href={HTTP_SERVER}
            id="wd-server-root"
            target="_blank"
            rel="noreferrer"
          >
            Server
          </a>
        </li>
      </ul>
    </div>
  );
}
