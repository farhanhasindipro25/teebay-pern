"use client";
import React, { useState } from "react";
import MyProductsBreadcrumb from "../_libs/components/MyProductsBreadcrumb";
import ProductTitleForm from "./_libs/components/ProductTitleForm";
import ProductCategoriesForm from "./_libs/components/ProductCategoriesForm";
import ProductDescriptionForm from "./_libs/components/ProductDescriptionForm";
import ProductPriceAndRentForm from "./_libs/components/ProductPriceAndRentForm";
import ProductSummary from "./_libs/components/ProductSummary";

export default function AddProductPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const addProductSteps = [
    <ProductTitleForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <ProductCategoriesForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <ProductDescriptionForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <ProductPriceAndRentForm
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
    <ProductSummary
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />,
  ];
  return (
    <div className="space-y-72">
      <MyProductsBreadcrumb />

      <div className="min-h-screen space-y-4">
        <p className="text-center text-sm font-medium text-gray-500">
          Fields marked with <span className="text-red-500">*</span> are
          required
        </p>
        <div>{addProductSteps[currentStep]}</div>
      </div>
    </div>
  );
}
