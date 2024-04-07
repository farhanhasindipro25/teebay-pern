"use client";
import Link from "next/link";
import React from "react";
import Button from "../InputFields/Button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap">
        <Link
          href="/"
          className="text-gray-700 hover:text-indigo-500 font-bold text-lg"
        >
          TEEBAY
        </Link>
        {pathname === "/login" && (
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-500 font-semibold hover:underline"
          >
            All Products
          </Link>
        )}
        {pathname === "/" && (
          <Link href="/login">
            <Button variant="secondary">LOGIN</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
