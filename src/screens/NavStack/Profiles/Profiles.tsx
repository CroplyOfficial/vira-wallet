import React from "react";
import { SampleProfiles } from "../../../data/profiles.sample";
import { Container } from "../../../components/ui/Container/Container";
import { Card } from "../../../components/ui/Card/Card";
import { ChevronRight } from "../../../components/assets/icons";
import { useNavigate } from "react-router";
import "./Profiles.scss";

export const Profiles = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {SampleProfiles.map((profile, index) => (
        <Card key={index}>
          <div className="profile-data" onClick={() => navigate("/")}>
            <div className="profile-icon">{profile.name[0]}</div>
            <div className="profile-name">{profile.name}</div>
            <ChevronRight color={"white"} />
          </div>
        </Card>
      ))}
    </Container>
  );
};
