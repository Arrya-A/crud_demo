import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ewallet from "./pages/financial/e-wallet/Ewallet.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import NetworkMembers from "./pages/networkMembers/NetworkMembers.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Document from "./pages/document/Document.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ewallet" element={<Ewallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/members" element={<NetworkMembers />} />
        <Route path="/home" element={<Document />} />
      </Routes>
    </>
  );
}

export default App;
