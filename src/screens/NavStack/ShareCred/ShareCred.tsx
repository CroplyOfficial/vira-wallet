import React, { useEffect } from "react";
import socketClient from "socket.io-client";
import { share_service } from "../../../config";

export const ShareCred = ({ match }: any) => {
  console.log(match);
  const startShare = () => {
    const socket = socketClient(share_service, { query: { roomId: "123" } });
    const shareCredential = () => {
      socket.emit("shareCred", "asdf");
    };

    socket.on("shareCred", (data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    startShare();
  }, []);

  return <div className=""></div>;
};
