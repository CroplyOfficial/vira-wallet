import React, { useState } from "react";
import { ICredConfig, IProfileType } from "../../../../types/profile.interface";
import { Card } from "../../../../components/ui/Card/Card";
import { Back, ChevronRight } from "../../../../components/assets/icons";
import { Show, Hide } from "../../../../components/assets/icons";

interface IProfileViewProps {
  profile: IProfileType;
  setSelected: (s: any) => void;
  updateProfile: (credConf: ICredConfig) => Promise<void>;
}
export const ProfileView = (props: IProfileViewProps) => {
  const { profile, setSelected, updateProfile } = props;
  const [selectedCred, setSelectedCred] = useState<Record<string, unknown>>();
  const [excluded, setExcluded] = useState<string[]>();

  const handleCredSelect = (cred: ICredConfig) => {
    setExcluded(() => cred.excluded);
    setSelectedCred(() => cred.vc);
  };

  const handleExcludeToggle = (id: string) => {
    if (excluded.includes(id)) {
      const excl = excluded.filter((item) => item !== id);
      setExcluded(() => excl);
    } else {
      setExcluded((excl) => [...excl, id]);
    }
  };

  const handleSave = () => {
    const cred = { vc: selectedCred, excluded };
    updateProfile(cred);
  };

  return (
    <Card>
      {selectedCred ? (
        <div className="selected-profile-cred">
          <Back
            color={"white"}
            className="profile-header-back"
            onClick={() => setSelectedCred(() => null)}
          />
          <h2 className="profile-header">
            {selectedCred.credentialSubject["Credential Type"]}
          </h2>
          {Object.keys(selectedCred.credentialSubject).map((prop, index) => (
            <div
              className={`profile-cred-prop ${
                excluded.includes(prop) && "field-hidden"
              }`}
              key={index}
            >
              <div className="prop-data">
                <div className="prop-data-header">{prop}</div>
                <div className="prop-data-text">
                  {selectedCred.credentialSubject[prop]}
                </div>
              </div>
              {excluded.includes(prop) ? (
                <Hide
                  color={"gray"}
                  onClick={() => handleExcludeToggle(prop)}
                />
              ) : (
                <Show
                  color={"#89C7F3"}
                  onClick={() => handleExcludeToggle(prop)}
                />
              )}
            </div>
          ))}
          <button className="vira-button" onClick={handleSave}>
            SAVE CHANGES
          </button>
        </div>
      ) : (
        <React.Fragment>
          <Back
            color={"white"}
            className="profile-header-back"
            onClick={() => setSelected(null)}
          />
          <h2 className="profile-header">{profile.name}</h2>
          <div className="profile-creds">
            {profile.creds.map((cred, index) => (
              <div
                className="profile-cred"
                onClick={() => handleCredSelect(cred)}
                key={index}
              >
                <div className="profile-cred-icon">
                  {cred.vc.credentialSubject["Credential Issuer"]
                    .split("//")[1][0]
                    .toUpperCase()}
                </div>
                <div className="profile-data">
                  {cred.vc.credentialSubject["Credential Type"]}
                </div>
                <ChevronRight color={"white"} />
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
    </Card>
  );
};
