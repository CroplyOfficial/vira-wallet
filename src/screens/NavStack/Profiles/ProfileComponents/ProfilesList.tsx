import React from "react";
import { Card } from "../../../../components/ui/Card/Card";
import { IProfileType } from "../../../../types/profile.interface";
import { ChevronRight } from "../../../../components/assets/icons";

interface IProfilesListProps {
  profiles: IProfileType[];
}
export const ProfilesList = (props: IProfilesListProps) => {
  const { profiles } = props;

  return (
    <React.Fragment>
      {profiles.map((profile: IProfileType, index: number) => (
        <Card key={index}>
          <div className="profile-item">
            <div className="profile-icon">{profile.name[0]}</div>
            <div className="profile-name">{profile.name}</div>
            <ChevronRight color={"white"} />
          </div>
        </Card>
      ))}
    </React.Fragment>
  );
};
