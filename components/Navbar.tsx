"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import SignInButton from "./SignInButton";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div className="flex w-fullh-screen max-w-4xl container mx-auto px-6 flex-col">
      <header className="w-full flex items-center justify-between mb-10 py-4 border-b-2">
        <Link href="/">Home</Link>
        <Link href="/protected/server">Protected (server)</Link>
        <Link href="/protected/client">Protected (client)</Link>

        {/* {!session && (
          <p className="cursor-pointer" onClick={() => signIn()}>
            Sign in
          </p>
        )}
        {session && (
          <>
            <Image
              src={session?.user?.image as string}
              alt={session?.user?.name as string}
              width={32}
              height={32}
            />
            <p className="cursor-pointer" onClick={() => signOut()}>
              Sign out
            </p>
          </>
        )} */}
        <SignInButton />
      </header>
    </div>
  );
}
