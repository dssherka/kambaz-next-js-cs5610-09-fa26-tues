import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Kambaz Node Server App</h1>
      <h2> Hello World!</h2>
      <ul>
        <li><Link href="/labs/lab1">Lab 1: Learning HTML</Link></li>
        <li><Link href="/labs/lab2">Lab 2: Learning CSS</Link></li>
        <li><Link href="/labs/lab3">Lab 3: Learning JavaScript</Link></li>
        <li><Link href="/labs/lab4">Lab 4</Link></li>
        <li><Link href="/labs/lab5">Lab 5</Link></li>
      </ul>
    </div>
  );
}
