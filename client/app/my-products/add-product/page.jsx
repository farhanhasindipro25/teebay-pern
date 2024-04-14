"use client";
import React, { useState } from "react";
import MyProductsBreadcrumb from "../_libs/components/MyProductsBreadcrumb";
import ProductTitleForm from "./_libs/components/ProductTitleForm";
import ProductCategoriesForm from "./_libs/components/ProductCategoriesForm";
import ProductDescriptionForm from "./_libs/components/ProductDescriptionForm";

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
  ];
  return (
    <div className="space-y-72">
      <MyProductsBreadcrumb />
      <div className="min-h-screen">{addProductSteps[currentStep]}</div>
    </div>
  );
}
