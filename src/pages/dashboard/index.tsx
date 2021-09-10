import "./dashboard.scss";
import logo from "../../assets/logo_healthcare.png";
import iconPieChart from "../../assets/icons/pie_chart.svg";
import iconDoctor from "../../assets/icons/doctor.svg";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container">
      <section className="sidebar">
        <img src={logo} alt="healthcare" className="logo" />
        <nav className="navigation">
          <NavLink exact to="/" activeClassName="active">
            <img src={iconPieChart} alt="dashboard" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/medicos" activeClassName="active">
            <img src={iconDoctor} alt="doctor" />
            <span>Médicos</span>
          </NavLink>
        </nav>
      </section>
    </div>
  );
}
