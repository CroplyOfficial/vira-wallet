import ReactPinField from "react-pin-field";
import React from "react";
import "./inputPin.scss";

interface IPinProps {
  pin: number;
  setPin: (pin: number) => void;
}

export const InputPin = (props: IPinProps) => {
  const { pin, setPin } = props;

  return (
    <div className="input-pin">
      <ReactPinField
        className="input-pin-inner"
        validate="123456788"
        length={6}
        type="password"
        onChange={(e: any) => setPin(Number(e.target.value))}
      ></ReactPinField>
    </div>
  );
};
