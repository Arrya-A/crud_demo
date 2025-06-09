import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ewallet from "./pages/financial/e-wallet/Ewallet.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Ewallet />} />
      </Routes>
    </>
  );
}

export default App;
