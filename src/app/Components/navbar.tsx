"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarButtons from "./navbarbuttons";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-full px-3 py-1 text-xs ${
            pathname === "/"
              ? "bg-[#1A2312] text-[#C2F800] font-semibold"
              : "text-white"
          }`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/MyPlan"
          className={`rounded-full px-3 py-1 text-xs ${
            pathname === "/MyPlan"
              ? "bg-[#1A2312] text-[#C2F800] font-semibold"
              : "text-white"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white border-b border-gray-700 px-4">
      <div className="container mx-auto flex w-full items-center">

        {/* Left side */}
        <div className="navbar-start">

          {/* Mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-gray-700"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="ml-2">
            <Image
              src={logo}
              alt="FITLOG"
              width={25}
              height={25}
            />
          </Link>

          {/* FITLOG */}
          <Link
            href="/"
            className="btn btn-ghost text-xl font-bold text-white"
          >
            FITLOG
          </Link>
        </div>

        {/* Middle navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            {links}
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end">
          <NavbarButtons />
        </div>

      </div>
    </div>
  );
};

export default Navbar;