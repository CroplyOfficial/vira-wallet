import React from "react";
import { NotifBell } from "../../assets/icons";
import { IUser } from "../../../types/user.interface";
import { ViraLogoWhite } from "../../assets/ViraLogoWhite";
import { useNavigate } from "react-router";
import "./TopBar.scss";

interface ITopBarProps {
  user: IUser;
}
export const TopBar = (props: ITopBarProps) => {
  const { user } = props;
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <div className="profile" onClick={() => navigate("/settings")}>
        {user.profile[0].toUpperCase()}
      </div>
      <ViraLogoWhite height={40} width={40} />
      <NotifBell heigh={40} width={40} />
    </div>
  );
};
