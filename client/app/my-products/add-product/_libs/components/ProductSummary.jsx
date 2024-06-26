import React from "react";
import Button from "../../../../_libs/components/InputFields/Button";
import Badge from "../../../../_libs/components/ui/Badge";

export default function ProductSummary({ currentStep, setCurrentStep }) {
  return (
    <div className="w-full space-y-2">
      <p className="text-lg text-gray-700 text-center font-bold">
        Product Summary
      </p>
      <div className="space-y-4">
        <div className="border border-gray-300 p-6 rounded-lg">
          <h2 className="text-gray-700 font-semibold">
            Product Title: <span className="font-medium">Playstation 5</span>
          </h2>
          <h2 className="text-gray-700 flex gap-2 items-center font-semibold">
            Categories:{" "}
            <span className="flex items-center gap-2">
              <Badge variant="INFORMATION">Electronics</Badge>
              <Badge variant="INFORMATION">Toys</Badge>
            </span>
          </h2>
          <h2 className="text-gray-700 font-semibold">
            Description:{" "}
            <span className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              eligendi?
            </span>
          </h2>
          <h2 className="text-gray-700 font-semibold">
            Price: <span className="font-medium">$500</span>
          </h2>
          <h2 className="text-gray-700 font-semibold">
            Rental Charges: <span className="font-medium">$50 per day</span>
          </h2>
        </div>
        <div className="flex gap-4 justify-end">
          <Button
            variant="secondary"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Go Back
          </Button>
          <Button variant="primary">Add Product</Button>
        </div>
      </div>
    </div>
  );
}
