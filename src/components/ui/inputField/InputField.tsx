import React from "react";
import "./inputField.scss";

interface Props {
  value: string;
  placeholder: string;
  setValue: (val: string) => void;
  type?: "text" | "password";
}
const InputField: React.FC<Props> = (props: Props) => {
  const { value, placeholder, setValue, type } = props;
  return (
    <div className="field">
      <input
        type={type ? type : "text"}
        name={placeholder}
        placeholder={placeholder}
        className="input-text field__input"
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className="field__label">{placeholder}</p>
    </div>
  );
};

export { InputField };
