import React, { useState, useEffect } from "react";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import axios from "axios";
import { readFile, writeFile } from "../../../utils/systemUtils/filesystem";

export const Scan = (user: any) => {
  const [data, setData] = useState<any>("to scan");

  console.log(user.user.doc.id);

  const startScan = async () => {
    const result = await BarcodeScanner.scan({
      prompt: "Place the QR code in the square",
      disableSuccessBeep: true,
    });
    const scan = JSON.parse(result.text);
    if (scan.type === "didScan") {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${scan.token}`,
        },
      };
      const { data }: any = await axios.post(
        `${scan.api}/api/users/assign-did`,
        { did: user.user.doc.id },
        config
      );
      const content = await readFile("endpoints").catch((error) => null);
      if (content) {
        const prevEndpoints = JSON.parse(content.data);
        const endpoint_exists = prevEndpoints.find(
          (endpoint) => endpoint.api === scan.api
        );
        if (!endpoint_exists) {
          const endpoints = [
            ...prevEndpoints,
            { api: scan.api, token: scan.token },
          ];
          await writeFile(JSON.stringify(endpoints), "endpoints");
          console.log(endpoints);
        } else {
          console.log(prevEndpoints);
        }
      } else {
        const endpoints = [{ api: scan.api, token: scan.token }];
        await writeFile(JSON.stringify(endpoints), "endpoints");
      }
    }
  };

  return (
    <div className="scan">
      <div className="data">{data}</div>
      <button className="vira-button" onClick={startScan}>
        START SCAN
      </button>
    </div>
  );
};
