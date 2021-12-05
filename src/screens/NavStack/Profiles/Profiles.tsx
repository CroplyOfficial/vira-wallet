import React, { useState, useEffect } from "react";
import { Container } from "../../../components/ui/Container/Container";
import { useNavigate } from "react-router";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ScanQR } from "./ProfileComponents/ScanQR";
import { SetupAccount } from "./ProfileComponents/SetupAccount";
import { isInternalOnly } from "../../../config";
import { writeFile, readFile } from "../../../utils/systemUtils/filesystem";
import axios from "axios";
import "./Profiles.scss";

export const Profiles = () => {
  const navigate = useNavigate();
  const [isConfigured, setConfigured] = useState<boolean>(false);
  const [isConfiguring, setConfiguring] = useState<boolean>(false);
  const [scanData, setScanData] = useState<Record<string, unknown>>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const setAccount = async (url: string, publicKey: string) => {
    const { data } = await axios.post(
      `${url}/api/users`,
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    );
    writeFile(JSON.stringify({ publicKey, ...data }), "cloudvault");
    setConfigured(() => true);
  };

  const setupCloudvault = async () => {
    interface IScanData {
      internalAddr: string;
      publicAddr: string;
      port: string;
      publicKey: string;
    }
    const { publicAddr, internalAddr, port, publicKey } =
      scanData as unknown as IScanData;
    isInternalOnly
      ? setAccount(`http://${internalAddr}:${port}`, publicKey)
      : setAccount(`http://${publicAddr}:${port}`, publicKey);
  };

  const startScan = async () => {
    const result = await BarcodeScanner.scan({
      prompt: "Place the QR code in the square",
      disableSuccessBeep: true,
    });
    const scan = JSON.parse(result.text);
    setScanData(() => scan);
    if (scan.type === "cloudvault") {
      setConfiguring(() => true);
    }
  };

  useEffect(() => {
    const checkForConfig = async () => {
      const config = await readFile("cloudvault").catch(() => {});
      if (config) {
        setConfigured(() => true);
      }
    };

    checkForConfig();
  }, []);

  return (
    <Container>
      {isConfigured ? (
        <React.Fragment></React.Fragment>
      ) : (
        <React.Fragment>
          {isConfiguring ? (
            <SetupAccount
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              setupCloudvault={setupCloudvault}
            />
          ) : (
            <ScanQR startScan={startScan} />
          )}
        </React.Fragment>
      )}
    </Container>
  );
};
