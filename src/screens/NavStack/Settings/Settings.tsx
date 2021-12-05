import React, { useState } from "react";
import { Container } from "../../../components/ui/Container/Container";
import { Card } from "../../../components/ui/Card/Card";
import { ToggleButton } from "../../../components/ui/ToggleButton/ToggleButton";
import "./Settings.scss";

export const Settings = () => {
  const [selected, setSelected] = useState<boolean>(false);

  const toggleSelected = () => {
    setSelected((curr) => !curr);
  };

  return (
    <Container>
      <Card>
        <div className="settings-title">General Settings</div>
        <div className="settings-block">
          <div className="settings-block-header">Choose System Language</div>
          <select className="settings-block-picker">
            <option value="english">English (En)</option>
            <option value="german">German (De)</option>
            <option value="french">French (Fr)</option>
          </select>
        </div>
        <div className="settings-block">
          <div className="settings-block-header">Choose Timezone</div>
          <select className="settings-block-picker">
            <option value="english">CET (UTC +0100)</option>
            <option value="german">CEST (UTC +0200)</option>
            <option value="french">PST (UTC -0800)</option>
          </select>
        </div>
        <div className="settings-block">
          <div className="settings-block-header">Pick Time & Date Format</div>
          <select className="settings-block-picker">
            <option value="english">DD:MM:YY HH:MM</option>
            <option value="german">MM:DD:YY HH:MM</option>
          </select>
        </div>
        <div className="settings-block">
          <div className="settings-block-header">System Notifications</div>
          <ToggleButton selected={selected} toggleSelected={toggleSelected} />
        </div>
        <div className="vira-button">SAVE SETTINGS</div>
      </Card>
    </Container>
  );
};
