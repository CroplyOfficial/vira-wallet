import React, { forwardRef, useRef, useState } from "react";
import { ICredConfig, IProfileType } from "../../../../types/profile.interface";
import { Card } from "../../../../components/ui/Card/Card";
import {
  Back,
  ChevronRight,
  Ellipsis,
  CrossInCircle,
} from "../../../../components/assets/icons";
import { InputField } from "../../../../components/ui/inputField/InputField";
import { Show, Hide } from "../../../../components/assets/icons";

interface IProfileViewProps {
  profile: IProfileType;
  setSelected: (s: any) => void;
  updateProfile: (credConf: ICredConfig) => Promise<void>;
  updateDomains: (profConf: Partial<IProfileType>) => Promise<void>;
}
export const ProfileView = (props: IProfileViewProps) => {
  const { profile, setSelected, updateProfile, updateDomains } = props;
  const [isEditing, setEditing] = useState<boolean>(false);
  const [selectedCred, setSelectedCred] = useState<Record<string, unknown>>();
  const [excluded, setExcluded] = useState<string[]>();
  const [name, setName] = useState<string>(profile.name);
  const [domainName, setDomainName] = useState<string>();
  const [error, setError] = useState<string>();
  const [domains, setDomains] = useState<string[]>(profile.authorized);

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

  const handleDomainRemoval = (domain: string) => {
    const newDomains = domains.filter((d) => d !== domain);
    setDomains(() => newDomains);
  };

  const handleAddDomain = () => {
    // regex to check if the entered domain is a valid IP or a domain
    const domainExp =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    const ipExp =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const domainRegex = new RegExp(domainExp);
    const ipRegex = new RegExp(ipExp);

    if (domainName.match(domainRegex) || domainName.match(ipRegex)) {
      setDomains((d) => [...d, domainName]);
      setError(() => null);
      setDomainName(() => null);
      //@ts-ignore
      domainInputRef.current.value = "";
    } else {
      setError(() => "Please enter a proper URL");
    }
  };

  const handleDomainUpdate = async () => {
    const data = { name, authorized: domains };
    updateDomains(data);
    setEditing(() => false);
  };

  const handleSave = () => {
    const cred = { vc: selectedCred, excluded };
    updateProfile(cred);
    setSelected(null);
  };

  return (
    <Card extend={true}>
      {isEditing ? (
        <div style={{ margin: "15px" }} className="edit-profile">
          <Back
            color={"white"}
            className="profile-header-back"
            onClick={() => setEditing(() => false)}
          />
          <h2 className="profile-header">Edit Profile</h2>
          <InputField
            value={name}
            setValue={setName}
            placeholder="Profile Name"
          />
          <div className="edit-section">
            <div className="section-header">Add Domain</div>
            {error && <div className="error">{error}</div>}
            <InputField
              value={domainName}
              setValue={setDomainName}
              placeholder={"Enter Domain"}
            />
            <button
              className="vira-button add-domain-button"
              onClick={handleAddDomain}
            >
              + Add Domain
            </button>
          </div>
          <div className="edit-section">
            <div className="section-header">Authorized Domains</div>
            {domains.map((domain, index) => (
              <div className="authorized-domain" key={index}>
                <div className="domain-name">{domain}</div>
                <CrossInCircle
                  color={"white"}
                  height={20}
                  width={20}
                  onClick={() => handleDomainRemoval(domain)}
                />
              </div>
            ))}
          </div>
          <button className="vira-button" onClick={handleDomainUpdate}>
            SAVE
          </button>
        </div>
      ) : selectedCred ? (
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
                  height={15}
                  onClick={() => handleExcludeToggle(prop)}
                />
              ) : (
                <Show
                  color={"#89C7F3"}
                  height={15}
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
          <Ellipsis
            color={"white"}
            className="profile-edit"
            onClick={() => setEditing(() => true)}
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
