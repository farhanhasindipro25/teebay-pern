"use client";
import ReactTextareaAutosize from "react-textarea-autosize";
import cn from "../../utils-kit/cn";
import {
  TEXTAREA_BOX_STYLES,
  TEXTAREA_LABEL_STYLES,
} from "../../styles-kit/AutoSizeTextAreaFieldStyleKit";
export default function AutoSizeTextAreaField(props) {
  const {
    name,
    id,
    type = "text",
    value,
    label = "",
    placeholder,
    defaultValue,
    className,
    minRows = 1,
    maxRows = 5,
    onChange,
  } = props;

  const TEXTAREA_FIELD_STYLES = cn(TEXTAREA_BOX_STYLES, className);
  const isRequired = label?.includes("*");
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={TEXTAREA_LABEL_STYLES}>
        {isRequired === false ? (
          label
        ) : (
          <div className="flex">
            {label.split("*")[0]}
            <span className="text-red-500">*</span>
          </div>
        )}
      </label>
      <ReactTextareaAutosize
        placeholder={placeholder}
        type={type}
        minRows={minRows}
        maxRows={maxRows}
        name={name}
        id={id}
        value={value}
        className={TEXTAREA_FIELD_STYLES}
        defaultValue={defaultValue}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
