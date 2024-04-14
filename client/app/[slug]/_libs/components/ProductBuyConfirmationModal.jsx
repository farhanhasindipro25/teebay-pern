import React from "react";
import Modal from "../../../_libs/components/ui/Modal";
import Button from "../../../_libs/components/InputFields/Button";
export default function ProductBuyConfirmationModal({ open, setOpen }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="space-y-6">
        <h2 className="text-gray-700 font-medium">
          Are you sure you want to buy this product?
        </h2>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger">Yes, Buy</Button>
        </div>
      </div>
    </Modal>
  );
}
