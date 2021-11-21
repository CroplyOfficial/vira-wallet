import React, { useState, useEffect } from "react";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

export const Scan = () => {
  const [data, setData] = useState<any>("to scan");

  const startScan = async () => {
    const result = await BarcodeScanner.scan({
      prompt: "Place the QR code in the square",
      disableSuccessBeep: true,
      resultDisplayDuration: 0,
    });
    console.log(`Barcode Data: ${result.text}`);
    setData(() => result.text);
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
