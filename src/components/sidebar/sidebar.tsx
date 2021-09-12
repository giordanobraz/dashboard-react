import { NavLink } from "react-router-dom";
import iconDoctor from "../../assets/icons/doctor.svg";
import iconPieChart from "../../assets/icons/pie_chart.svg";
import logo from "../../assets/logo_healthcare.png";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={logo} alt="healthcare" className="logo" />
      <a href="#0" className="mobile-menu-button">
        <svg viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </a>
      <nav className="navigation" id="menu">
        <NavLink exact to="/" activeClassName="active">
          <img src={iconPieChart} alt="dashboard" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/medicos" activeClassName="active">
          <img src={iconDoctor} alt="doctor" />
          <span>Médicos</span>
        </NavLink>
      </nav>
    </aside>
  );
}
