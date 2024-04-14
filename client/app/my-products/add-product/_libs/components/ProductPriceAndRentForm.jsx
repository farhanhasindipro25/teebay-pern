import React from "react";
import Button from "../../../../_libs/components/InputFields/Button";
import TextInputField from "../../../../_libs/components/InputFields/TextInputField";
import SelectField from "../../../../_libs/components/InputFields/SelectField";

export default function ProductPriceAndRentForm({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="w-full space-y-2">
      <p className="text-lg text-gray-700 text-center font-bold">
        Name price and rent charges for your product
      </p>
      <div className="space-y-4">
        <TextInputField
          name=""
          id=""
          placeholder="Enter product price"
          label="Price *"
        />
        <div className="flex gap-4">
          <TextInputField
            name=""
            id=""
            placeholder="Enter rental charge"
            label="Rent *"
          />
          <SelectField
            name=""
            id=""
            label="Rental Timeline *"
            placeholder="Select rental timeline"
            options={[]}
          />
        </div>
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
