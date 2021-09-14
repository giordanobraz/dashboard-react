import logo from "../../assets/logo_healthcare.png";
import MenuItem from "./MenuItem";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={logo} alt="healthcare" className="logo" />

      <nav className="navigation" id="menu">
        <span className="navigation-title">Medicine</span>
        <MenuItem />
      </nav>
    </aside>
  );
}
