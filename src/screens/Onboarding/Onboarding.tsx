import React, { useState } from "react";
import { ViraLogoWhite } from "../../components/assets/ViraLogoWhite";
import { Step1, Step2, Step3, Step4, Step5 } from "./steps";
import { createIdentity } from "../../utils/identityUtils/did";
import "./Onboarding.scss";

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirm, setConfirm] = useState<string>();
  const [pin, setPin] = useState<number>();
  const [confirmPin, setConfirmPin] = useState<number>();
  const [error, setError] = useState<string>();

  const advance = () => {
    setError(() => null);
    setActiveStep((number) => number + 1);
  };

  const handleValidation = async (): Promise<void> => {
    switch (activeStep) {
      case 0:
        const did = await createIdentity();
        console.log(did);
        if (!name) {
          setError(() => "Please enter a profile name");
        } else {
          advance();
        }
        return;
      case 1:
        return advance();
      case 2:
        if (password !== confirm) {
          setError(() => "your passwords do not match");
        } else {
          advance();
        }
        return;
      case 3:
        if (pin !== confirmPin) {
          setError(() => "the pins do not match");
        } else {
          advance();
        }
        return;
      case 4:
        return advance();
    }
  };

  const steps = [
    <Step1
      key={0}
      profileName={name}
      setProfileName={setName}
      nextStep={handleValidation}
    />,
    <Step2 key={1} nextStep={handleValidation} />,
    <Step3
      key={2}
      nextStep={handleValidation}
      password={password}
      setPassword={setPassword}
      confirm={confirm}
      setConfirm={setConfirm}
    />,
    <Step4
      key={3}
      nextStep={handleValidation}
      pin={pin}
      setPin={setPin}
      confirmPin={confirmPin}
      setConfirmPin={setConfirmPin}
    />,
    <Step5 key={4} nextStep={handleValidation} />,
    <div key={5} className="">
      66
    </div>,
  ];

  return (
    <div className="onboarding">
      <div className="vira-logo">
        <ViraLogoWhite width={120} height={120} />
        <div className="vira-text">VIRA</div>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="step">{steps[activeStep]}</div>
      <div className="steps-bar">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`dot ${index <= activeStep && "step-done"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { Onboarding };
