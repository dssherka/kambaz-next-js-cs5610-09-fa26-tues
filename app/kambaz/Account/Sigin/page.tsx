import Link from "next/link";
export default function SignIn(){
    return(
        <div>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" name="username"/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"/>
                <Link href="/kambaz/Dashboard">Sign Up</Link>
            </form>
        </div>
    );
}