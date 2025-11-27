import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import GatosView from "../components/GatosView";

export default function GatosContainers() {
  return (
    <>
      <Navbar />

      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gatos" element={<GatosView />} />
        </Routes>
      </div>
    </>
  );
}
