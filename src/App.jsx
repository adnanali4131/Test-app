import "./App.css";
import AppRouter from "./routes/AppRouter";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";

Amplify.configure(config);

function App() {


  return (
    <Authenticator
      className="w-screen h-screen"
      signUpAttributes={[
        "address",
        "email",
        "name",
        "birthdate",
        "phone_number",
        "picture",
      ]}>
      {({ signOut, user }) => {
        return (
          <div className="w-screen h-screen overflow-auto">
            <AppRouter user={user} signOut={signOut} />
          </div>
        );
      }}
    </Authenticator>
  );
}

export default App;
