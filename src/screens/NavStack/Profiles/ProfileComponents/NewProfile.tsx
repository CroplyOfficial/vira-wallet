import React, { useEffect, useState } from "react";
import { Card } from "../../../../components/ui/Card/Card";
import { InputField } from "../../../../components/ui/inputField/InputField";
import { Back } from "../../../../components/assets/icons";
import { readFile } from "../../../../utils/systemUtils/filesystem";
import { VerifiableCreds } from "../../../../data/vc.sample";
import { Checkbox } from "../../../../components/ui/Checkbox/Checkbox";

let storedCreds = [];

interface INewProfileProps {
  setIsAdding: (adding: boolean) => void;
}
export const NewProfile = (props: INewProfileProps) => {
  const { setIsAdding } = props;
  const [profileName, setProfileName] = useState<string>();
  const [verifiableCreds, setVerifiableCreds] = useState<any>();
  const [selectedCreds, setSelectedCreds] = useState<any[]>([]);

  const checkCredentials = async () => {
    const endpointsMeta = await readFile("endpoints").catch(() => null);
    const credsMeta = await readFile("certificates").catch(() => null);
    if (credsMeta) {
      console.log("credsmeta", credsMeta);
      storedCreds = JSON.parse(credsMeta.data);
      console.log(storedCreds);
    }
    // setVerifiableCreds(() => storedCreds);
    setVerifiableCreds(() => VerifiableCreds);
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
    console.log(selectedCreds);
  };

  useEffect(() => {
    checkCredentials();
  }, []);

  return (
    <Card>
      <div className="new-profile">
        <Back
          color={"white"}
          className="new-profile-back"
          onClick={() => setIsAdding(false)}
        />
        <h2>New Profile</h2>
        <InputField
          placeholder="Profile Name"
          value={profileName}
          setValue={setProfileName}
        />
        <p>
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
