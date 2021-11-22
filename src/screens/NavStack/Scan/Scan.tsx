import React, { useState, useEffect } from "react";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import axios from "axios";
import { readFile, writeFile } from "../../../utils/systemUtils/filesystem";
import socket from "socket.io-client";
import { share_service } from "../../../config";
import { Container } from "../../../components/ui/Container/Container";
import { Card } from "../../../components/ui/Card/Card";
import { TickInCircle, CrossInCircle } from "../../../components/assets/icons";
import "../VerifiableCredential/VerifiableCredential.scss";

export const Scan = (user: any) => {
  const [result, setResult] = useState<any>();
  const [verifying, setVerifying] = useState<boolean>(false);

  const joinSocket = (roomId: string) => {
    const sock = socket(share_service, { query: { roomId } });
    sock.emit("enter", "enter");
    setVerifying(() => true);
    sock.on("shareCred", (data) => {
      setVerifying(() => false);
      setResult(() => data);
    });
  };

  const startScan = async () => {
    const result = await BarcodeScanner.scan({
      prompt: "Place the QR code in the square",
      disableSuccessBeep: true,
    });
    const scan = JSON.parse(result.text);
    if (scan.type === "didScan") {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${scan.token}`,
        },
      };
      const { data }: any = await axios.post(
        `${scan.api}/api/users/assign-did`,
        { did: user.user.doc.id },
        config
      );
      const content = await readFile("endpoints").catch((error) => null);
      if (content) {
        const prevEndpoints = JSON.parse(content.data);
        const endpoint_exists = prevEndpoints.find(
          (endpoint) => endpoint.api === scan.api
        );
        if (!endpoint_exists) {
          const endpoints = [
            ...prevEndpoints,
            { api: scan.api, token: scan.token },
          ];
          await writeFile(JSON.stringify(endpoints), "endpoints");
          console.log(endpoints);
        } else {
          console.log(prevEndpoints);
        }
      } else {
        const endpoints = [{ api: scan.api, token: scan.token }];
        await writeFile(JSON.stringify(endpoints), "endpoints");
      }
    } else if (scan.type === "vcShare") {
      joinSocket(scan.roomId);
    }
  };

  return (
    <Container>
      <div className="scan">
        {!verifying && !result ? (
          <Card>
            <button className="vira-button" onClick={startScan}>
              START SCAN
            </button>
          </Card>
        ) : !result && verifying ? (
          <Card extend={true}>
            <h2 style={{ textAlign: "center" }}>Verifying...</h2>
          </Card>
        ) : !verifying && result ? (
          <Card extend={true}>
            <React.Fragment>
              <div className="issuer-logo">
                {result.vc.id.split("//")[1][0].toUpperCase()}
              </div>
              <div className="issuer-title">
                {result.vc.id.split("//")[1].split("/")[0]}
              </div>
              <div className="cred-title">{result.vc.type[1]}</div>
              {Object.keys(result.vc.credentialSubject).map((key, index) => (
                <div key={index} className="cred-prop">
                  <div className="cred-prop-data">
                    <div className="property">{key}</div>
                    <div className="value">
                      {result.vc.credentialSubject[key]}
                    </div>
                  </div>
                </div>
              ))}
              <div className="result">
                {result.result.VC && result.result.DVID ? (
                  <>
                    <TickInCircle color="#91C69D" />
                    <h3 style={{ color: "#91C69D" }}>Verified</h3>
                  </>
                ) : (
                  <>
                    <CrossInCircle color="#DC8080" />
                    <h3 style={{ color: "#DC8080" }}>Unverified</h3>
                  </>
                )}
              </div>
            </React.Fragment>
          </Card>
        ) : (
          <div></div>
        )}
      </div>
    </Container>
  );
};
