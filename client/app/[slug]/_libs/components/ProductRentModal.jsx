import React from "react";
import Modal from "../../../_libs/components/ui/Modal";
import Button from "../../../_libs/components/InputFields/Button";
import PastDisabledDateSelectorInputField from "../../../_libs/components/InputFields/PastDisabledDateSelectorInputField";

export default function ProductRentModal({ open, setOpen }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="space-y-6">
        <h2 className="text-gray-700 text-lg font-semibold">Rental Period</h2>
        <div className="space-y-4">
          <PastDisabledDateSelectorInputField
            name=""
            id=""
            label="Start Date *"
          />
          <PastDisabledDateSelectorInputField
            name=""
            id=""
            label="End Date *"
          />
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger">Confirm Rent</Button>
        </div>
      </div>
    </Modal>
  );
}
