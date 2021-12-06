import React, { useState, useEffect } from "react";
import { Container } from "../../../components/ui/Container/Container";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ScanQR } from "./ProfileComponents/ScanQR";
import { SetupAccount } from "./ProfileComponents/SetupAccount";
import { isInternalOnly } from "../../../config";
import { writeFile, readFile } from "../../../utils/systemUtils/filesystem";
import { ProfilesList } from "./ProfileComponents/ProfilesList";
import { NewProfile } from "./ProfileComponents/NewProfile";
import { ICredConfig, IProfileType } from "../../../types/profile.interface";
import { ProfileView } from "./ProfileComponents/ProfileView";
import { SampleProfiles } from "../../../data/profiles.sample";
import axios from "axios";
import "./Profiles.scss";

export const Profiles = () => {
  const [url, setUrl] = useState<string>();
  const [appToken, setToken] = useState<string>();
  const [isConfigured, setConfigured] = useState<boolean>(false);
  const [isConfiguring, setConfiguring] = useState<boolean>(false);
  const [isAddingProfile, setAddingProfile] = useState<boolean>(false);
  const [selectedProfile, setSelectedProfile] = useState<IProfileType>();
  const [profiles, setProfiles] = useState<IProfileType[]>();
  const [scanData, setScanData] = useState<Record<string, unknown>>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const setAccount = async (url: string, publicKey: string) => {
    const { data } = await axios.post(
      `${url}/api/users`,
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    );
    writeFile(JSON.stringify({ url, publicKey, ...data }), "cloudvault");
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

  const updateProfileCredentials = async (cred: ICredConfig) => {
    const creds = selectedProfile.creds.filter(
      (profileCred) => cred.vc.id !== profileCred.vc.id
    );
    creds.push(cred);
    const { data } = await axios.patch(
      `${url}/api/profiles/${selectedProfile._id}`,
      { creds },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${appToken}`,
        },
      }
    );
    checkProfiles();
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

  const checkProfiles = async () => {
    const { data } = await axios.get(`${url}/api/profiles`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${appToken}`,
      },
    });
    setProfiles(() => data);
  };

  useEffect(() => {
    const checkForConfig = async () => {
      const confMeta = await readFile("cloudvault").catch(() => null);
      const config = JSON.parse(confMeta.data);
      if (config) {
        setConfigured(() => true);
      }

      const { url, token } = config;
      setUrl(() => url);
      setToken(() => token);

      checkProfiles();
    };

    checkForConfig();
  }, []);

  return (
    <Container>
      {isConfigured ? (
        <React.Fragment>
          {isAddingProfile ? (
            <React.Fragment>
              {url && (
                <NewProfile
                  token={appToken}
                  url={url}
                  setIsAdding={setAddingProfile}
                />
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {selectedProfile ? (
                <ProfileView
                  profile={selectedProfile}
                  setSelected={setSelectedProfile}
                  updateProfile={updateProfileCredentials}
                />
              ) : (
                <ProfilesList
                  profiles={profiles}
                  setIsAdding={setAddingProfile}
                  setSelected={setSelectedProfile}
                />
              )}
            </React.Fragment>
          )}
        </React.Fragment>
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
