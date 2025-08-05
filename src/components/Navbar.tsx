"use client";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, LogOutIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-[#ff3c3c]/10 rounded">
            <ZapIcon className="w-4 h-4 text-[#ff3c3c]" />
          </div>
          <span className="text-xl font-bold font-mono">
            fit<span className="text-[#ff3c3c]">flex</span>.ai
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-[#ff3c3c] transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-[#ff3c3c] transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>

              <Button
                asChild
                variant="glow"
                className="ml-2 border-red-500 bg-red-900 text-red-400 font-bold hover:text-white hover:bg-red-500/100 shadow-[0_0_8px_1px_#ff3c3c] hover:shadow-[0_0_12px_2px_#ff3c3c] transition-shadow duration-200"
              >
                <Link href="/generate-program">
                  <DumbbellIcon size={30} className="mr-1" />
                  Get Started
                </Link>
              </Button>

              {/* Sign Out Button */}
              <SignOutButton>
                <Button
                  variant="glow"
                  className="border border-red-500 bg-red-900 text-red-400 hover:bg-red-500 hover:text-white shadow-[0_0_8px_1px_#ff3c3c] hover:shadow-[0_0_12px_2px_#ff3c3c] transition duration-200"
                >
                  <LogOutIcon size={16} className="mr-1" />
                  Sign Out
                </Button>
              </SignOutButton>

              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant="glow"
                  className="relative z-10 border border-red-500 text-red-500 shadow-[0_0_10px_2px_rgba(255,0,0,0.3)] hover:bg-red-500 hover:text-white transition duration-200"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button
                  variant="glow"
                  className="relative z-10 bg-red-500 text-white shadow-[0_0_12px_4px_rgba(255,0,0,0.4)] hover:bg-red-600 transition duration-200"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
