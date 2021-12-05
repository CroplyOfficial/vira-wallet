import React from "react";
import { Card } from "../../../../components/ui/Card/Card";

interface IArgs {
  startScan: any;
}
export const ScanQR = (props: IArgs) => {
  const { startScan } = props;

  return (
    <React.Fragment>
      <Card>
        <h2>Setup Cloudvault</h2>
        <p>
          If you do not have a cloudvault running yet visit the repo and spin up
          an instance now
        </p>
        <button className="vira-button" onClick={startScan}>
          SCAN CODE
        </button>
      </Card>
    </React.Fragment>
  );
};
