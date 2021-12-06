import React from "react";
import { Card } from "../../../../components/ui/Card/Card";
import { IProfileType } from "../../../../types/profile.interface";
import { ChevronRight } from "../../../../components/assets/icons";

interface IProfilesListProps {
  profiles: IProfileType[];
  setIsAdding: (adding: boolean) => void;
  setSelected: (profile: IProfileType) => void;
}
export const ProfilesList = (props: IProfilesListProps) => {
  const { profiles, setIsAdding, setSelected } = props;

  return (
    <div className="profile-list">
      {profiles &&
        profiles.map((profile: IProfileType, index: number) => (
          <Card key={index}>
            <div className="profile-item" onClick={() => setSelected(profile)}>
              <div className="profile-icon">{profile.name[0]}</div>
              <div className="profile-name">{profile.name}</div>
              <ChevronRight color={"white"} />
            </div>
          </Card>
        ))}
      <button
        className="vira-button"
        style={{ width: "60vw", marginLeft: "10vw" }}
        onClick={() => setIsAdding(true)}
      >
        + new profile
      </button>
    </div>
  );
};
