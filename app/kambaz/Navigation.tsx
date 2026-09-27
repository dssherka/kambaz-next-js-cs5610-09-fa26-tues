import Link from "next/link";

export default function Navigation() {
    return (
        <ul>
            <li><Link href="https://northeastern.instructure.com/">Northeastern</Link></li>
            <li><Link href="/kambaz/Account">Account</Link></li>
            <li><Link href="/kambaz/Dashboard">Dashboard</Link></li>
            <li><Link href="/kambaz/Courses">Courses</Link></li>
            <li><Link href="/kambaz/History">History</Link></li>
            <li><Link href="/kambaz/Inbox">Inbox</Link></li>
            <li><Link href="/kambaz/Calendar">Calendar</Link></li>
        </ul>
    );
}