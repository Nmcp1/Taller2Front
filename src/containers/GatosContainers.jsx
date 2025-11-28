import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import GatosView from "../components/GatosView";
import Navbar from "../components/Navbar";

export default function GatosContainers() {
  return (
    <>
      <Navbar />

      <div className="content-wrapper" style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gatos" element={<GatosView />} />
        </Routes>
      </div>
    </>
  );
}
