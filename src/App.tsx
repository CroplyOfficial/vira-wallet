import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { Onboarding } from "./screens/Onboarding/Onboarding";
import { Login } from "./screens/Login/Login";
import { Buffer } from "buffer";
import { readFile } from "./utils/systemUtils/filesystem";
import { IUser } from "./types/user.interface";
import { TopBar } from "./components/ui/TopBar/TopBar";
import { NavBar } from "./components/ui/NavBar/NavBar";
import { Dashboard } from "./screens/NavStack/Dashboard/Dashboard";
import { Scan } from "./screens/NavStack/Scan/Scan";
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
      {isLoggedIn && <TopBar user={userInfo} />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Dashboard />
            ) : userExists ? (
              <Login setLoggedIn={setLoggedIn} userInfo={userInfo} />
            ) : (
              <Onboarding recheckFunc={getInfo} />
            )
          }
        />
        <Route path={"/scan"} element={<Scan user={userInfo} />} />
      </Routes>
      {isLoggedIn && <NavBar />}
    </React.Fragment>
  );
};
export default App;
