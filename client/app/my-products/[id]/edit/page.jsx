import React from "react";
import EditProductBreadcrumb from "../_libs/components/EditProductBreadcrumb";
import TextInputField from "../../../_libs/components/InputFields/TextInputField";
import SelectField from "../../../_libs/components/InputFields/SelectField";
import productCategoryOptions from "../../add-product/_libs/statics/productCategoryOptions";
import AutoSizeTextAreaField from "../../../_libs/components/InputFields/AutosizeTextAreaField";
import Button from "../../../_libs/components/InputFields/Button";

export default function MyProductEditPage() {
  return (
    <div className="space-y-10">
      <EditProductBreadcrumb />
      <form className="space-y-4">
        <TextInputField
          name=""
          id=""
          placeholder="Enter a title for your product"
          label="Product Title *"
        />
        <SelectField
          name=""
          id=""
          isMulti={true}
          options={productCategoryOptions}
          label="Product Category *"
        />
        <AutoSizeTextAreaField
          name=""
          id=""
          minRows={3}
          label="Product Description *"
          placholder="Describe your product"
        />
        <TextInputField
          name=""
          id=""
          label="Price *"
          placeholder="Name a price for your product"
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
        <div className="flex justify-end">
          <Button variant="secondary">Update Information</Button>
        </div>
      </form>
    </div>
  );
}
