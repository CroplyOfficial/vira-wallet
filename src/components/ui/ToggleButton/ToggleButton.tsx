import React from "react";
import "./toggleButton.scss";

interface ToggleButtonProps {
  selected: boolean;
  toggleSelected: any;
}
export const ToggleButton: React.FC<ToggleButtonProps> = ({
  selected,
  toggleSelected,
}: ToggleButtonProps) => {
  return (
    <div
      className={`toggle-container ${selected ? "" : "disabled"}`}
      onClick={toggleSelected}
    >
      <div
        className={`dialog-button ${selected ? "" : "disabled-button"}`}
      ></div>
    </div>
  );
};
