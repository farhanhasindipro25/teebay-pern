import React from "react";
import MyProductCard from "./_libs/components/MyProductCard";
import Link from "next/link";
import Button from "../_libs/components/InputFields/Button";

export default function MyproductsPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-gray-700 text-center">
          MY PRODUCTS
        </h2>
        <Link href="/my-products/add-product">
          <Button variant="primary">ADD PRODUCT</Button>
        </Link>
      </div>
      <MyProductCard />
    </div>
  );
}
