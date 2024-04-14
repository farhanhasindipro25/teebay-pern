import React from "react";
import SelectField from "../../../../_libs/components/InputFields/SelectField";
import Button from "../../../../_libs/components/InputFields/Button";
import productCategoryOptions from "../statics/productCategoryOptions";

export default function ProductCategoriesForm({ currentStep, setCurrentStep }) {
  return (
    <div className="w-full space-y-2">
      <p className="text-lg text-gray-700 text-center font-bold">
        Select a category for your product
      </p>
      <div className="space-y-4">
        <SelectField
          name=""
          id=""
          placeholder="Select a category"
          label="Product Category *"
          options={productCategoryOptions}
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
