import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import useAlertHook from "./hooks/AlertHook";

function App() {
  const { AlertToast } = useAlertHook();
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <AlertToast />
    </>
  );
}

export default App;
