import React from "react";
import Button from "../_libs/components/InputFields/Button";

export default function MyProductsLayout({ children }) {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-gray-700 text-center">
          MY PRODUCTS
        </h2>
        <Button variant="primary">ADD PRODUCT</Button>
      </div>
      {children}
    </div>
  );
}
