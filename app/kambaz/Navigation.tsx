import Link from "next/link";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
      >
        Northeastern
      </a>
      <br />
      <Link href="/kambaz/Account" id="wd-account-link">
        Account
      </Link>
      <br />
      <Link href="/kambaz/Dashboard" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />
      <Link href="/kambaz/Courses" id="wd-course-link">
        Courses
      </Link>
      <br />
      <Link href="/kambaz/Calendar" id="wd-calendar-link">
        Calendar
      </Link>
      <br />
      <Link href="/kambaz/Inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br />
      <Link href="/" id="wd-labs-link">
        Labs
      </Link>
      <br />
    </div>
  );
}