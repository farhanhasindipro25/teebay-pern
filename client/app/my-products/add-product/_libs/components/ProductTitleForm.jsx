import React from "react";
import TextInputField from "../../../../_libs/components/InputFields/TextInputField";
import Button from "../../../../_libs/components/InputFields/Button";

export default function ProductTitleForm({ currentStep, setCurrentStep }) {
  return (
    <div className="w-full space-y-2">
      <p className="text-lg text-gray-700 text-center font-bold">
        Enter a title for your product
      </p>
      <div className="space-y-4">
        <TextInputField
          name=""
          id=""
          placeholder="e.g. iphone 15 pro max"
          label="Product Title *"
        />
        <div className="flex justify-end">
          <Button
            variant="primary"
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
