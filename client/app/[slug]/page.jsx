"use client";
import React from "react";
import Badge from "../_libs/components/ui/Badge";
import Button from "../_libs/components/InputFields/Button";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function GlobalProductsDetailPage() {
  const router = useRouter();
  return (
    <div className="space-y-4">
      <p
        className="flex cursor-pointer items-center gap-2 font-semibold text-indigo-500"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon className="w-5 h-5 text-indigo-500" />
        Go Back
      </p>
      <h2 className="text-2xl font-medium text-gray-500">iphone 13 pro max</h2>
      <div className="flex items-center gap-2">
        <p className="text-base font-semibold text-gray-500">Categories: </p>
        <div className="flex items-center gap-2">
          <Badge variant="INFORMATION">Electronics</Badge>
          <Badge variant="INFORMATION">Toys</Badge>
        </div>
      </div>
      <p className="text-base font-semibold text-gray-500">Price: $500</p>
      <p className="text-base font-semibold text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad a, alias
        minus voluptates ipsam laboriosam architecto illo. Corporis non
        accusamus illum, incidunt assumenda, ex qui eligendi cupiditate sequi
        voluptatibus quam, exercitationem deleniti similique? Obcaecati suscipit
        saepe dolorem doloremque nulla quibusdam facilis laborum at dolor, magni
        ab harum nisi quia. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Minima delectus commodi eos molestias! Ipsum distinctio tempore
        voluptate ducimus culpa dolor laudantium, eum fugit provident
        perspiciatis numquam accusamus delectus voluptas inventore! Dolor et ad
        optio, natus minus quasi asperiores eius quisquam mollitia sed eum
        minima reprehenderit iusto facere odit. Similique maiores odio eveniet
        libero vitae voluptate! Saepe numquam blanditiis est quasi debitis,
        ipsum quo accusantium nisi at labore asperiores maxime provident fugit,
        porro, tempore iure dolorum doloribus. Vel tempora perferendis aperiam
        error debitis dicta exercitationem deleniti incidunt provident natus,
        quam aliquam quaerat enim nihil? Repellat libero obcaecati nam deleniti
        blanditiis atque!
      </p>
      <div className="flex justify-end gap-4">
        <Button variant="secondary">RENT</Button>
        <Button variant="primary">BUY</Button>
      </div>
    </div>
  );
}
