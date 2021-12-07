import React from "react";
import { Card } from "../../../../components/ui/Card/Card";
import { InputField } from "../../../../components/ui/inputField/InputField";

interface IArgs {
  username: string;
  password: string;
  setUsername: (user: string) => void;
  setPassword: (pass: string) => void;
  setupCloudvault: () => Promise<void>;
}
export const SetupAccount = (props: IArgs) => {
  const { username, password, setUsername, setPassword, setupCloudvault } =
    props;

  return (
    <React.Fragment>
      <Card extend={true}>
        <h2>Setup Cloudvault</h2>
        <InputField
          placeholder={"Username"}
          value={username}
          setValue={setUsername}
        />
        <InputField
          placeholder={"Password"}
          type="password"
          value={password}
          setValue={setPassword}
        />
        <button className="vira-button" onClick={setupCloudvault}>
          SETUP ACCOUNT
        </button>
      </Card>
    </React.Fragment>
  );
};
