import ReactPinField from "react-pin-field";
import React, { useRef } from "react";
import "./inputPin.scss";

interface IPinProps {
  pin: number;
  setPin: (pin: number) => void;
}

export const InputPin = (props: IPinProps) => {
  const { pin, setPin } = props;
  const pinRef = useRef();

  const handlePinChange = () => {
    const pinArr = [];
    for (let i = 0; i < 6; i++) {
      // @ts-ignore
      if (Number(pinRef.current.children[i].value)) {
        // @ts-ignore
        pinArr.push(pinRef.current.children[i].value);
      }
    }
    const pinEntered = Number(pinArr.join(""));
    setPin(pinEntered);
  };

  return (
    <div className="input-pin">
      <ReactPinField
        className="input-pin-inner"
        validate="123456788"
        length={6}
        type="password"
        ref={pinRef}
        onChange={handlePinChange}
      ></ReactPinField>
    </div>
  );
};
