import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { Onboarding } from "./screens/Onboarding/Onboarding";
import { Login } from "./screens/Login/Login";
import { Buffer } from "buffer";
import { readFile } from "./utils/systemUtils/filesystem";
import { IUser } from "./types/user.interface";
global.Buffer = Buffer;

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [userExists, setUserExists] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUser>();

  const getInfo = async () => {
    const content = await readFile("credentials").catch(() => null);
    if (content) {
      setUserInfo(() => JSON.parse(content.data));
      setUserExists(() => true);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <div>logged</div>
            ) : userExists ? (
              <Login setLoggedIn={setLoggedIn} userInfo={userInfo} />
            ) : (
              <Onboarding recheckFunc={getInfo} />
            )
          }
        />
      </Routes>
    </React.Fragment>
  );
};
export default App;
