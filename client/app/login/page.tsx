import React from "react";
import TextInputField from "../_libs/components/TextInputField";
import Button from "../_libs/components/Button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex space-y-4 flex-col max-w-xl mx-auto items-center justify-center min-h-screen">
      <h2 className="font-semibold text-xl text-gray-700">LOGIN</h2>
      <form className="w-full space-y-4 border bg-white border-gray-300 p-6 rounded-lg">
        <TextInputField
          label="Email"
          name="email"
          id="email"
          type="text"
          placeholder="name@example.com"
        />
        <TextInputField
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        <Button variant="primary" className="w-full justify-center">
          LOGIN
        </Button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-indigo-500 font-semibold hover:underline hover:text-indigo-400"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
