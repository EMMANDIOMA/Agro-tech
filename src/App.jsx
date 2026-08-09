import { Routes, Route } from "react-router";
import Layout from "./Task-bar/Layout";
import Home from "./Home-components/Home";
import Profile from "./profile component/profile";
import Settings from "./SettingsComponent/Settings";
import Ai from "./Ai/Ai";
import { Show, SignIn, SignUp } from "@clerk/react";
function App() {
  return (
    <>
      <Show when="signed-out">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </Show>

      <Show when="signed-in">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/Ai" element={<Ai />} />
          </Route>
        </Routes>
      </Show>
    </>
  );
}

export default App;
