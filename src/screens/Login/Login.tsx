import React, { useState } from "react";
import { IUser } from "../../types/user.interface";
import { ViraLogoWhite } from "../../components/assets/ViraLogoWhite";
import { InputPin } from "../../components/ui/inputPin/InputPin";
import * as bcrypt from "bcryptjs";
import "./Login.scss";

interface ILogin {
  setLoggedIn: (set: boolean) => void;
  userInfo: IUser;
}
export const Login: React.FC<ILogin> = (props: ILogin) => {
  const { userInfo, setLoggedIn } = props;
  const [pin, setPin] = useState<number>();

  const handleLogin = async () => {
    const match = await bcrypt.compare(String(pin), userInfo.pin);
    console.log(match);
    if (match) {
      console.log(pin);
      setLoggedIn(true);
    }
  };

  return (
    <React.Fragment>
      <div className="login">
        <div className="vira-logo">
          <ViraLogoWhite width={120} height={120} />
          <div className="vira-text">VIRA</div>
        </div>
        <div className="profile">{userInfo.profile[0].toUpperCase()}</div>
        <InputPin pin={pin} setPin={setPin} />
        <div className="vira-button" onClick={handleLogin}>
          LOGIN
        </div>
      </div>
    </React.Fragment>
  );
};
