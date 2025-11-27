import { Menubar } from "primereact/menubar";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.scss";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      label: "Quienes somos",
      className: location.pathname === "/" ? "active-tab" : "",
      command: () => navigate("/")
    },
    {
      label: "Gatos locos",
      className: location.pathname === "/gatos" ? "active-tab" : "",
      command: () => navigate("/gatos")
    }
  ];

  const start = <div className="navbar-title">gatIG</div>;

  return (
    <div className="navbar-wrapper">
      <Menubar model={items} start={start} className="custom-menubar" />
    </div>
  );
}