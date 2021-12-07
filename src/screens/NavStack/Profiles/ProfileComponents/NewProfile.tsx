import React, { useEffect, useState } from "react";
import { Card } from "../../../../components/ui/Card/Card";
import { InputField } from "../../../../components/ui/inputField/InputField";
import { Back } from "../../../../components/assets/icons";
import { readFile } from "../../../../utils/systemUtils/filesystem";
import { Checkbox } from "../../../../components/ui/Checkbox/Checkbox";
import axios from "axios";

let storedCreds = [];

interface INewProfileProps {
  setIsAdding: (adding: boolean) => void;
  url: string;
  token: string;
  updateList: () => any;
}
export const NewProfile = (props: INewProfileProps) => {
  const { setIsAdding, url, token, updateList } = props;
  const [profileName, setProfileName] = useState<string>();
  const [verifiableCreds, setVerifiableCreds] = useState<any>();
  const [selectedCreds, setSelectedCreds] = useState<any[]>([]);

  const checkCredentials = async () => {
    const credsMeta = await readFile("certificates").catch(() => null);
    if (credsMeta) {
      console.log("credsmeta", credsMeta);
      storedCreds = JSON.parse(credsMeta.data);
      console.log(storedCreds);
    }
    setVerifiableCreds(() => storedCreds);
  };

  const handleCredToggle = (cred: any) => {
    if (selectedCreds.includes(cred)) {
      const creds = selectedCreds.filter(
        (selectedCred) => cred !== selectedCred
      );
      setSelectedCreds(() => creds);
    } else {
      setSelectedCreds((creds) => [...creds, cred]);
    }
  };

  const handleSave = async () => {
    if (profileName) {
      const creds = selectedCreds.map((vc) => {
        const excluded = Object.keys(vc.credentialSubject);
        return { vc, excluded };
      });
      const { data } = await axios.post(
        `${url}/api/profiles`,
        { name: profileName, creds },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data) {
        setIsAdding(false);
      }
    }
    updateList();
  };

  useEffect(() => {
    checkCredentials();
  }, []);

  return (
    <Card extend={true}>
      <div className="new-profile">
        <Back
          color={"white"}
          className="new-profile-back"
          onClick={() => setIsAdding(false)}
        />
        <div className="profile-header">New Profile</div>
        <InputField
          placeholder="Profile Name"
          value={profileName}
          setValue={setProfileName}
        />
        <p className="profile-info">
          A new profile will be created. Save and continue to add credentials
          and assign domain permissions to your new profile.
        </p>
        <div className="profile-creds">
          {verifiableCreds &&
            verifiableCreds.map((cred: any, index: number) => (
              <div className="profile-cred" key={index}>
                <div className="profile-cred-icon">
                  {cred.credentialSubject["Credential Issuer"]
                    .split("//")[1][0]
                    .toUpperCase()}
                </div>
                <div className="profile-data">
                  {cred.credentialSubject["Credential Type"]}
                </div>
                <Checkbox
                  isChecked={selectedCreds.includes(cred)}
                  id={cred}
                  onToggle={handleCredToggle}
                />
              </div>
            ))}
        </div>
        <button className="vira-button" onClick={handleSave}>
          Save Profile
        </button>
      </div>
    </Card>
  );
};
