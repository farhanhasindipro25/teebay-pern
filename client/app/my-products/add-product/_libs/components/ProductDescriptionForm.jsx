import React from "react";
import AutoSizeTextAreaField from "../../../../_libs/components/InputFields/AutosizeTextAreaField";
import Button from "../../../../_libs/components/InputFields/Button";

export default function ProductDescriptionForm({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="w-full space-y-2">
      <p className="text-lg text-gray-700 text-center font-bold">
        Describe your product
      </p>
      <div className="space-y-4">
        <AutoSizeTextAreaField
          name=""
          id=""
          label="Product Description *"
          placeholder="Describe your product..."
          minRows={3}
        />
        <div className="flex gap-4 justify-end">
          <Button
            variant="secondary"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Go Back
          </Button>
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
