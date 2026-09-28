import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link href="/kambaz/Account/Signin">Signin</Link> <br />
      <Link href="/kambaz/Account/Signup">Signup</Link> <br />
      <Link href="/kambaz/Account/profile">Profile</Link> <br />
    </div>
  );
}