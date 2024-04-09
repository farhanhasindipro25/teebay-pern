"use client";
import Link from "next/link";
import React from "react";
import Button from "../InputFields/Button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap">
        <Link
          href="/"
          className="text-gray-700 hover:text-indigo-500 font-bold text-lg"
        >
          TEEBAY
        </Link>
        {pathname === "/login" ||
          (pathname === "/sign-up" && (
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-500 font-semibold hover:underline"
            >
              All Products
            </Link>
          ))}
        {pathname === "/" && (
          <Link href="/login">
            <Button variant="primary">LOGIN</Button>
          </Link>
        )}
        {pathname === "/my-products" && (
          <Link href="/login">
            <Button variant="secondary">LOGOUT</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
