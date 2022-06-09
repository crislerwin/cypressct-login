import React from "react";
import { SignIn } from "./pages/signIn";
import { AppProviders } from "./providers";

function App() {
  return (
    <AppProviders>
      <SignIn />
    </AppProviders>
  );
}

export default App;
