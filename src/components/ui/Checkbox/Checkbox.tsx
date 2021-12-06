import React from "react";

interface ICheckboxProps {
  isChecked: boolean;
  onToggle: (id: any) => any;
  id?: any;
}
export const Checkbox = (props: ICheckboxProps) => {
  const { isChecked, onToggle, id } = props;

  return (
    <div
      className={`vira-checkbox ${isChecked && "vira-checked"}`}
      onClick={() => onToggle(id)}
    >
      {isChecked && <div className="checked"></div>}
    </div>
  );
};
