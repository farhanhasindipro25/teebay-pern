import Link from "next/link";
import React from "react";
import Button from "../_libs/components/InputFields/Button";
import TextInputField from "../_libs/components/InputFields/TextInputField";

export default function SignupPage() {
  return (
    <div className="flex space-y-4 flex-col max-w-xl mx-auto items-center justify-center min-h-screen">
      <h2 className="font-semibold text-xl text-gray-700">SIGN UP</h2>
      <form className="w-full space-y-4 border bg-white border-gray-300 p-6 rounded-lg">
        <div className="w-full flex gap-4 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <TextInputField
              label="First Name"
              name="first_name"
              id="first_name"
              type="text"
              placeholder="e.g. Farhan"
            />
          </div>
          <div className="w-full md:w-1/2">
            <TextInputField
              label="Last Name"
              name="last_name"
              id="last_name"
              type="text"
              placeholder="e.g. Hasin"
            />
          </div>
        </div>
        <TextInputField
          label="Address"
          name="address"
          id="address"
          type="text"
          placeholder="Enter your address"
        />
        <div className="w-full flex gap-4 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <TextInputField
              label="Email"
              name="email"
              id="email"
              type="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="w-full md:w-1/2">
            <TextInputField
              label="Phone Number"
              name="phone_number"
              id="phone_number"
              type="text"
              placeholder="e.g. 01731441024"
            />
          </div>
        </div>
        <TextInputField
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
        <TextInputField
          label="Confirm Password"
          name="confirm_password"
          id="confirm_password"
          type="password"
          placeholder="Re-type your password"
        />
        <Button variant="primary" className="w-full justify-center">
          SIGNUP
        </Button>
        <p className="text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-500 font-semibold hover:underline hover:text-indigo-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
