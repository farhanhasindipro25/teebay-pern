import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function MyProductsBreadcrumb() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/my-products"
        className="font-medium text-gray-500 hover:underline hover:text-indigo-500"
      >
        My Products
      </Link>
      <div>
        <ChevronRightIcon className="w-4 h-4" />
      </div>
      <Link
        href="/my-products/add-product"
        className="font-semibold text-indigo-500 hover:underline"
      >
        Add Products
      </Link>
    </div>
  );
}
