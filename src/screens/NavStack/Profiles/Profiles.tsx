import React from "react";
import { SampleProfiles } from "../../../data/profiles.sample";
import { Container } from "../../../components/ui/Container/Container";
import { Card } from "../../../components/ui/Card/Card";
import { ChevronRight } from "../../../components/assets/icons";

export const Profiles = () => {
  return (
    <Container>
      {SampleProfiles.map((profile, index) => (
        <Card key={index}>
          <div className="profile-data">
            <div className="profile-icon">{profile.name[0]}</div>
            <div className="profile-name">{profile.name}</div>
            <ChevronRight color={"white"} />
          </div>
        </Card>
      ))}
    </Container>
  );
};
