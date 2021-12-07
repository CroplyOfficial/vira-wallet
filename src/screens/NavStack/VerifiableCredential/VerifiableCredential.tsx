import React, { useEffect, useState } from "react";
import { Card } from "../../../components/ui/Card/Card";
import { Back, Show, Hide } from "../../../components/assets/icons";
import qrcode from "qrcode";
import crypto from "crypto";
import "./VerifiableCredential.scss";
import socket from "socket.io-client";
import { share_service } from "../../../config";

let hidden = [];

interface IVerifiableCredProps {
  vc: Record<string, unknown>;
  setSelected: (vc: Record<string, unknown>) => void;
}
export const VerifiableCredential: React.FC<IVerifiableCredProps> = (
  props: IVerifiableCredProps
) => {
  const { vc, setSelected } = props;
  const [hiddenFields, setHiddenFields] = useState<string[]>([]);
  const [showShare, setShowShare] = useState<boolean>(false);
  const [qr, setQR] = useState<string>();

  const handleShowToggle = (key: string) => {
    const key_exists = hiddenFields.find((k) => k === key);
    if (key_exists) {
      const keys = hiddenFields.filter((k) => k !== key);
      setHiddenFields(() => keys);
    } else {
      setHiddenFields((keys) => [...keys, key]);
    }
  };

  const joinRoom = (room) => {
    const sock = socket(share_service, {
      query: { roomId: room },
    });
    sock.on("enter", (data) => {
      sock.emit("shareCred", { vc, hiddenFields: hidden });
    });
  };

  useEffect(() => {
    const setCode = async () => {
      const hash = `${crypto
        .createHash("sha1")
        // @ts-ignore
        .update(vc.id)
        .digest("hex")}${Math.floor(100000 + Math.random() * 900000)}`;
      const qrCode = await qrcode.toDataURL(
        JSON.stringify({ type: "vcShare", roomId: hash })
      );
      setQR(() => qrCode);
      joinRoom(hash);
    };
    setCode();
  }, []);

  return (
    <Card extend={true}>
      <Back
        className="back-button"
        color="white"
        onClick={() => {
          setSelected(null);
          setShowShare(() => false);
        }}
      />
      {!showShare ? (
        <React.Fragment>
          <div className="issuer-logo">
            {/* @ts-ignore */}
            {vc.credentialSubject["Credential Issuer"]
              .split("//")[1][0]
              .toUpperCase()}
          </div>
          {/* @ts-ignore */}
          <div className="issuer-title">
            {vc.credentialSubject["Credential Issuer"].split("//")[1]}
          </div>
          {/* @ts-ignore */}
          <div className="cred-title">
            {vc.credentialSubject["Credential Type"]}
          </div>
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
          <div
            className="vira-button cred-share"
            onClick={() => {
              hidden = hiddenFields;
              setShowShare(() => true);
            }}
          >
            share credential
          </div>
        </React.Fragment>
      ) : (
        <div className="share">
          {qr && (
            <React.Fragment>
              <img src={qr} />
              <h3>PRESENT THE QR CODE TO THE VERIFIER</h3>
            </React.Fragment>
          )}
        </div>
      )}
    </Card>
  );
};
