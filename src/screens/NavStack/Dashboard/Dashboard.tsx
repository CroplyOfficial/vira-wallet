import React, { useEffect, useState } from "react";
import { Card } from "../../../components/ui/Card/Card";
import { ChevronRight } from "../../../components/assets/icons";
import { Container } from "../../../components/ui/Container/Container";
import { VerifiableCredential } from "../VerifiableCredential/VerifiableCredential";
import { readFile, writeFile } from "../../../utils/systemUtils/filesystem";
import "./Dashboard.scss";
import axios from "axios";

const credentials = [];
let storedCreds = [];

export const Dashboard = () => {
  const [selectedVC, setSelectedVC] = useState<Record<string, unknown>>();
  const [verifiableCreds, setVerifiableCreds] = useState<any>();

  const checkCredentials = async () => {
    const endpointsMeta = await readFile("endpoints").catch(() => null);
    console.log(endpointsMeta);
    const credsMeta = await readFile("certificates").catch(() => null);
    if (credsMeta) {
      console.log("credsmeta", credsMeta);
      storedCreds = JSON.parse(credsMeta.data);
      console.log(storedCreds);
    }
    setVerifiableCreds(() => storedCreds);
    if (endpointsMeta) {
      const endpoints = JSON.parse(endpointsMeta.data);
      for await (const endpoint of endpoints) {
        const credsReceived = await axios
          .get(`${endpoint.api}/api/applications/@me/current`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${endpoint.token}`,
            },
          })
          .catch(() => null);
        if (credsReceived) {
          for (const cred of credsReceived.data) {
            if (cred.vc) credentials.push(cred.vc);
          }
          for (const cred of credentials) {
            if (
              !storedCreds.find((stored_cred) => cred.id === stored_cred.id)
            ) {
              storedCreds.push(cred);
            }
          }
          setVerifiableCreds(() => storedCreds);
          await writeFile(JSON.stringify(storedCreds), "certificates");
        }
      }
    }
  };

  useEffect(() => {
    checkCredentials();
  }, []);

  return (
    <Container>
      {selectedVC && (
        <VerifiableCredential vc={selectedVC} setSelected={setSelectedVC} />
      )}
      {!selectedVC &&
        verifiableCreds &&
        verifiableCreds.map((vc, index) => (
          <Card key={index}>
            <div
              className="verifiable-cred"
              onClick={() => setSelectedVC(() => vc)}
              style={{ cursor: "pointer" }}
            >
              <div className="vc-icon">
                {vc.credentialSubject["Credential Issuer"]
                  .split("//")[1][0]
                  .toUpperCase()}
              </div>
              <div className="vc-data">
                <div className="vc-issuer">
                  {vc.credentialSubject["Credential Issuer"].split("//")[1]}
                </div>
                <div className="vc-type">
                  {vc.credentialSubject["Credential Type"]}
                </div>
              </div>
              <ChevronRight color={"white"} />
            </div>
          </Card>
        ))}
    </Container>
  );
};
