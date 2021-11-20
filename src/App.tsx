import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { Onboarding } from "./screens/Onboarding/Onboarding";
import { Buffer } from "buffer";
global.Buffer = Buffer;

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <div>logged</div> : <Onboarding />}
        />
      </Routes>
    </React.Fragment>
  );
};
export default App;
