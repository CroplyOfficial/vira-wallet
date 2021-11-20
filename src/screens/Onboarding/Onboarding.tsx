import React, { useState } from "react";
import { ViraLogoWhite } from "../../components/assets/ViraLogoWhite";
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7 } from "./steps";
import { createIdentity } from "../../utils/identityUtils/did";
import * as bcrypt from "bcryptjs";
import { writeFile, readFile } from "../../utils/systemUtils/filesystem";
import "./Onboarding.scss";

interface IOnboardingProps {
  recheckFunc: () => Promise<void>;
}
const Onboarding: React.FC<IOnboardingProps> = ({
  recheckFunc,
}: IOnboardingProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirm, setConfirm] = useState<string>();
  const [pin, setPin] = useState<number>();
  const [confirmPin, setConfirmPin] = useState<number>();
  const [error, setError] = useState<string>();
  const [mnemonic, setMnemonic] = useState<string[]>();
  const [doc, setDoc] = useState<string>();
  const [isCreatingIdentity, setCreatingIdentity] = useState<boolean>(false);

  const advance = () => {
    setError(() => null);
    setActiveStep((number) => number + 1);
  };

  const handleValidation = async (): Promise<void> => {
    switch (activeStep) {
      case 0:
        setCreatingIdentity(() => true);
        const did = await createIdentity();
        setMnemonic(() => did.mnemonic.split(" "));
        setDoc(() => JSON.stringify(did.doc));
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
      case 5:
        return advance();
      case 6:
        const passSalt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, passSalt);
        const pinSalt = await bcrypt.genSalt(10);
        const pinHash = await bcrypt.hash(String(pin), pinSalt);
        await writeFile(
          JSON.stringify({
            doc: JSON.parse(doc),
            pin: pinHash,
            profile: name,
            password: passwordHash,
          }),
          "credentials"
        );
        const content = await readFile("credentials").catch(() =>
          setError("unable to write config to filesystem")
        );
        if (content) {
          recheckFunc();
        }
    }
  };

  const steps = [
    <Step1
      key={0}
      profileName={name}
      setProfileName={setName}
      nextStep={handleValidation}
      isCreating={isCreatingIdentity}
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
    <Step6 key={5} nextStep={handleValidation} mnemonic={mnemonic} />,
    <Step7 key={6} nextStep={handleValidation} />,
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
