import {
  DATE_BOX_STYLES,
  DATE_LABEL_STYLES,
} from "../../styles-kit/PastDisabledDateSelectorInputFieldStyleKit";
import cn from "../../utils-kit/cn";

export default function PastDisabledDateSelectorInputField(props) {
  const { label, name, id, value, onChange } = props;
  const DATE_FIELD_STYLES = cn(DATE_BOX_STYLES);
  const today = new Date().toISOString().split("T")[0];
  const isRequired = label.includes("*");
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={DATE_LABEL_STYLES}>
        {isRequired === false ? (
          label
        ) : (
          <div className="flex">
            {label.split("*")[0]}
            <span className="text-red-500">*</span>
          </div>
        )}
      </label>
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        min={today}
        className={DATE_FIELD_STYLES}
        {...props}
      />
    </div>
  );
}
