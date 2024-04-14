"use client";
import React, { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function MyProductCard() {
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);
  return (
    <div className="p-6 bg-gray border-2 space-y-2 border-gray-300">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Cricket Kit</h2>
        <div className="flex items-center gap-4">
          <Link href={`/my-products/${1}/edit`}>
            <PencilSquareIcon className="w-6 h-6 cursor-pointer text-gray-500" />
          </Link>
          <TrashIcon
            className="w-6 h-6 cursor-pointer text-red-500"
            onClick={() => setOpenDeleteConfirmationModal(true)}
          />
          <DeleteConfirmationModal
            open={openDeleteConfirmationModal}
            setOpen={setOpenDeleteConfirmationModal}
          />
        </div>
      </div>
      <p className="text-base font-semibold text-gray-500">
        Categories: Sporting Goods, Outdoor
      </p>
      <p className="text-base font-semibold text-gray-500">
        Price: $500 | Rent: $100 daily
      </p>
      <p className="text-base font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis
        cum quas sint, eum sunt. Nihil, cumque quisquam debitis molestiae
        aspernatur consectetur suscipit ducimus pariatur earum natus molestias
        ab facere, sed quae libero distinctio impedit? Delectus consectetur
        doloremque, consequatur sed minus, ab libero repellat omnis amet
        eligendi tenetur exercitationem dicta.
      </p>
      <div className="flex flex-wrap pt-6 items-center justify-between">
        <p className="text-base font-semibold text-gray-500">
          Date Posted: 21st Sept 2021
        </p>
        <p className="text-base font-semibold text-gray-500">
          1028376412 views
        </p>
      </div>
    </div>
  );
}
