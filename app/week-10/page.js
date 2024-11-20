"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error during sign-out:", error);
        }
    }

    return (
        <main className="m-5">
            <header>
                <h1 className="text-3xl text-center">Welcome to Firebase Auth</h1>
            </header>
            {user ? (
                <div className="text-center mt-4">
                    <p>Welcome, <strong>{user.displayName}</strong>!</p>
                    <p>Email: {user.email}</p>
                    {user.photoURL && (
                        <img
                            src={user.photoURL}
                            alt={`${user.displayName}'s avatar`}
                            className="w-12 h-12 rounded-full mx-auto my-2"
                        />
                    )}
                    <div className="mt-2">
                        <Link className="text-blue-600 underline" href="/week-10/shopping-list">
                            Go to Shopping List
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="text-lg text-white bg-red-500 rounded px-4 py-2 mt-4"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="text-center mt-4">
                    <button
                        type="button"
                        className="text-lg text-white bg-blue-600 rounded px-4 py-2"
                        onClick={handleSignIn}
                    >
                        Sign In with GitHub
                    </button>
                </div>
            )}
        </main>
    );
}
