import React, { useState } from "react";
import { InputField } from "../../components/ui/inputField/InputField";
import { InputPin } from "../../components/ui/inputPin/InputPin";

interface StepProps {
  nextStep: () => Promise<void>;
}

interface Step1Props extends StepProps {
  profileName: string;
  setProfileName: (profile: string) => void;
}
const Step1: React.FC<Step1Props> = (props: Step1Props) => {
  const { profileName, setProfileName, nextStep } = props;

  return (
    <React.Fragment>
      <div className="step-title">setup your identity</div>
      <div className="step-text">
        You can create multiple Identity accounts, to maintain separate business
        and personal records. Let’s start with your first Identity name. You may
        add more later.
      </div>
      <InputField
        value={profileName}
        placeholder="Profile Name"
        setValue={setProfileName}
      />
      <button className="step-button" onClick={() => nextStep()}>
        create new identity
      </button>
    </React.Fragment>
  );
};

const Step2: React.FC<StepProps> = (props: StepProps) => {
  const { nextStep } = props;

  return (
    <React.Fragment>
      <div className="step-title">secure your wallet</div>
      <div className="step-text">
        Save and print your recovery kit PDF template. If you fill out the
        recovery kit and store it safely, you will always be able to recover
        your Identity.
      </div>
      <button className="step-button" onClick={() => nextStep()}>
        continue
      </button>
    </React.Fragment>
  );
};

interface Step3Props extends StepProps {
  password: string;
  setPassword: (p: string) => void;
  confirm: string;
  setConfirm: (p: string) => void;
}

const Step3: React.FC<Step3Props> = (props: Step3Props) => {
  const { nextStep, password, setPassword, confirm, setConfirm } = props;

  return (
    <React.Fragment>
      <div className="step-title">create password</div>
      <div className="step-text">
        Use a strong password to protect your Identity. Be sure to use a
        combination of upper and lower case letters, numbers and symbols
      </div>
      <InputField
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Enter Password"
      />
      <InputField
        type="password"
        value={confirm}
        setValue={setConfirm}
        placeholder="Confirm Password"
      />
      <button className="step-button" onClick={() => nextStep()}>
        save password
      </button>
    </React.Fragment>
  );
};

interface Step4Props extends StepProps {
  pin: number;
  setPin: (p: number) => void;
  confirmPin: number;
  setConfirmPin: (p: number) => void;
}

const Step4: React.FC<Step4Props> = (props: Step4Props) => {
  const { nextStep, pin, setPin, confirmPin, setConfirmPin } = props;

  return (
    <React.Fragment>
      <div className="step-title">setup pin code</div>
      <div className="step-text">
        Enter a 6-digit PIN below. You will be asked for your PIN code to gain
        access to your identity profile.
      </div>
      <InputPin pin={pin} setPin={setPin} />
      <InputPin pin={confirmPin} setPin={setConfirmPin} />
      <button className="step-button" onClick={() => nextStep()}>
        Save Pin
      </button>
    </React.Fragment>
  );
};

const Step5: React.FC<StepProps> = (props: StepProps) => {
  const { nextStep } = props;
  return (
    <React.Fragment>
      <div className="step-title">BACK-UP YOUR IDENTITY</div>
      <div className="step-text">
        You will now be shown a recovery phrase. Write it down in your recovery
        kit. DO NOT SHARE your recovery phrase with anyone, it can be used to
        access your identity and credentials.
      </div>
      <button className="step-button" onClick={() => nextStep()}>
        continue
      </button>
    </React.Fragment>
  );
};

export { Step1, Step2, Step3, Step4, Step5 };
