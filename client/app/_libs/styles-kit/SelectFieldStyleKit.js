/* eslint-disable @typescript-eslint/no-explicit-any */
export const SELECT_LABEL_STYLES =
  "appearance-none block text-sm font-medium text-gray-700";

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "rgb(99, 102, 241)" : provided.borderColor,
    boxShadow: state.isFocused
      ? "0 0 0 2px rgb(99, 102, 241)"
      : provided.boxShadow,
    border: state.isFocused ? "none" : provided.border,
    paddingTop: "3px",
    paddingBottom: "5px",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "rgb(99, 102, 241)"
        : provided.backgroundColor,
    color:
      (state.isFocused || state.isSelected) && !state.isMulti
        ? "white"
        : "rgb(99, 102, 241)",
    "&:hover": {
      backgroundColor: "rgb(99, 102, 241)",
      color: "white",
      cursor: "pointer",
    },
    overflow: "hidden",
    fontSize: "14px",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "white",
    color: "rgb(99, 102, 241)",
    borderRadius: "20px",
    padding: "2px 6px",
    marginRight: "5px",
    fontWeight: 600,
    border: "1px solid",
    borderColor: "rgb(99, 102, 241)",
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    color: "rgb(99, 102, 241)",
    backgroundColor: "white",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "rgb(99, 102, 241)",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  input: (provided) => ({
    ...provided,
    "input:focus": {
      boxShadow: "none",
    },
  }),
};
