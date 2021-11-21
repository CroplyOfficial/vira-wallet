import React, { useState } from "react";
import { VerifiableCreds } from "../../../data/vc.sample";
import { Card } from "../../../components/ui/Card/Card";
import { ChevronRight } from "../../../components/assets/icons";
import { Container } from "../../../components/ui/Container/Container";
import "./Dashboard.scss";
import { VerifiableCredential } from "../VerifiableCredential/VerifiableCredential";

export const Dashboard = () => {
  const [selectedVC, setSelectedVC] = useState<Record<string, unknown>>();

  return (
    <Container>
      {selectedVC && (
        <VerifiableCredential vc={selectedVC} setSelected={setSelectedVC} />
      )}
      {!selectedVC &&
        VerifiableCreds.map((vc, index) => (
          <Card key={index}>
            <div
              className="verifiable-cred"
              onClick={() => setSelectedVC(() => vc)}
              style={{ cursor: "pointer" }}
            >
              <div className="vc-icon">
                {vc.credentialSubject.credIssuer[0].toUpperCase()}
              </div>
              <div className="vc-data">
                <div className="vc-issuer">
                  {vc.credentialSubject.credIssuer}
                </div>
                <div className="vc-type">{vc.credentialSubject.credType}</div>
              </div>
              <ChevronRight color={"white"} />
            </div>
          </Card>
        ))}
    </Container>
  );
};
