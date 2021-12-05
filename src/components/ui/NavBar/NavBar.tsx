import React, { useState } from "react";
import { Home, Scan, Profiles, Settings } from "../../assets/icons";
import { useNavigate } from "react-router";
import "./NavBar.scss";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Home
        color="white"
        height={40}
        onClick={() => navigate("/")}
        className={`icon ${
          window.location.pathname === "/" && "selected-icon"
        }`}
      />
      <Scan
        color="white"
        height={40}
        onClick={() => navigate("/scan")}
        className={`icon ${
          window.location.href.toLowerCase().includes("scan") && "selected-icon"
        }`}
      />
      <Profiles
        color="white"
        height={40}
        onClick={() => navigate("/profiles")}
        className={`icon ${
          window.location.href.toLowerCase().includes("profiles") &&
          "selected-icon"
        }`}
      />
      <Settings
        color="white"
        height={40}
        onClick={() => navigate("/settings")}
        className={`icon ${
          window.location.href.toLowerCase().includes("settings") &&
          "selected-icon"
        }`}
      />
    </div>
  );
};
