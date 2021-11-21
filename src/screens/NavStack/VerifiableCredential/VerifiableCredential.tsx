import React, { useState } from "react";
import { Card } from "../../../components/ui/Card/Card";
import { Back, Show, Hide } from "../../../components/assets/icons";
import "./VerifiableCredential.scss";

interface IVerifiableCredProps {
  vc: Record<string, unknown>;
  setSelected: (vc: Record<string, unknown>) => void;
}
export const VerifiableCredential: React.FC<IVerifiableCredProps> = (
  props: IVerifiableCredProps
) => {
  const { vc, setSelected } = props;
  const [hiddenFields, setHiddenFields] = useState<string[]>([]);

  const handleShowToggle = (key: string) => {
    const key_exists = hiddenFields.find((k) => k === key);
    if (key_exists) {
      const keys = hiddenFields.filter((k) => k !== key);
      setHiddenFields(() => keys);
    } else {
      setHiddenFields((keys) => [...keys, key]);
    }
  };

  return (
    <Card extend={true}>
      <Back
        className="back-button"
        color="white"
        onClick={() => setSelected(null)}
      />
      <div className="issuer-logo">
        {/* @ts-ignore */}
        {vc.credentialSubject.credIssuer[0].toUpperCase()}
      </div>
      {/* @ts-ignore */}
      <div className="issuer-title">{vc.credentialSubject.credIssuer}</div>
      {/* @ts-ignore */}
      <div className="cred-title">{vc.credentialSubject.credType}</div>
      {Object.keys(vc.credentialSubject).map((key, index) => (
        <div
          key={index}
          className={`cred-prop ${
            hiddenFields.includes(key) && "cred-prop-hidden"
          }`}
        >
          <div className="cred-prop-data">
            <div className="property">{key}</div>
            <div className="value">{vc.credentialSubject[key]}</div>
          </div>
          {hiddenFields.includes(key) ? (
            <Hide color={"gray"} onClick={() => handleShowToggle(key)} />
          ) : (
            <Show color={"#89C7F3"} onClick={() => handleShowToggle(key)} />
          )}
        </div>
      ))}
      <div className="vira-button cred-share">share credential</div>
    </Card>
  );
};
