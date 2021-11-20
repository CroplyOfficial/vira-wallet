import React from "react";
import { VerifiableCreds } from "../../../data/vc.sample";
import { Card } from "../../../components/ui/Card/Card";
import { ChevronRight } from "../../../components/assets/icons";
import { Container } from "../../../components/ui/Container/Container";
import "./Dashboard.scss";

export const Dashboard = () => {
  return (
    <Container>
      {VerifiableCreds.map((vc, index) => (
        <Card key={index}>
          <div className="verifiable-cred" style={{ cursor: "pointer" }}>
            <div className="vc-icon">
              {vc.credentialSubject.credIssuer[0].toUpperCase()}
            </div>
            <div className="vc-data">
              <div className="vc-issuer">{vc.credentialSubject.credIssuer}</div>
              <div className="vc-type">{vc.credentialSubject.credType}</div>
            </div>
            <ChevronRight color={"white"} />
          </div>
        </Card>
      ))}
    </Container>
  );
};
