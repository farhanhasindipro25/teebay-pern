"use client";
import Select from "react-select";
import React from "react";
import {
  customStyles,
  SELECT_LABEL_STYLES,
} from "../../styles-kit/SelectFieldStyleKit";

export default function SelectField(props) {
  const {
    label = "",
    name,
    id = "",
    defaultValue,
    options,
    onChange,
    onBlur,
    placeholder,
    value,
    isMulti = false,
    isClearable = false,
    ...otherProps
  } = props;
  const isRequired = label.includes("*");

  return (
    <div
      className="flex w-full flex-col gap-1"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label htmlFor={id} className={SELECT_LABEL_STYLES}>
        {isRequired === false ? (
          label
        ) : (
          <div className="flex">
            {label.split("*")[0]}
            <span className="text-red-500">*</span>
          </div>
        )}
      </label>

      <Select
        name={name}
        inputId={id}
        value={value}
        styles={customStyles}
        classNamePrefix="select2-selection"
        placeholder={placeholder}
        options={options}
        noOptionsMessage={() => "No options"}
        onChange={onChange}
        onBlur={onBlur}
        isClearable={isClearable}
        defaultValue={defaultValue}
        {...otherProps}
      />
    </div>
  );
}
