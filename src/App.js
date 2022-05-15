import "./App.css";
import LoginButton from "./componenets/LoginButton";
import LogOutButton from "./componenets/LogOutButton";
import Profile from "./componenets/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <main className="App">
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogOutButton />
      {error && <p>Please try again</p>}
      {!error && isLoading && <p>...loading</p>}
      <Profile />
    </main>
  );
}

export default App;
