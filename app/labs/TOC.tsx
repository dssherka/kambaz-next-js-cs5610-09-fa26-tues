import Link from "next/dist/client/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <p>Daoud Sherkawi — "Ship it, then polish it."</p>
      <ul>
        <li><Link href="/labs/lab1" id="wd-lab1-link">Lab 1</Link></li>
        <li><Link href="/labs/lab2" id="wd-lab2-link">Lab 2</Link></li>
        <li><Link href="/labs/lab3" id="wd-lab3-link">Lab 3</Link></li>
        <li><Link href="/labs/lab4" id="wd-lab4-link">Lab 4</Link></li>
        <li><Link href="/labs/lab5" id="wd-lab5-link">Lab 5</Link></li>
        <li><Link href="https://kambaz.dev/book/ch1" id="wd-toc-book-link">Chapter 1</Link></li>
      </ul>
    </div>
  );
}
