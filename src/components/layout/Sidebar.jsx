import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaMoneyBillWave,
  FaChartPie,
  FaExchangeAlt,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

import "./layout.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        💰 TripCalc
      </div>

      <nav>

        <NavLink to="/">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/members">
          <FaUsers />
          <span>Members</span>
        </NavLink>

        <NavLink to="/expenses">
          <FaMoneyBillWave />
          <span>Expenses</span>
        </NavLink>

        <NavLink to="/analytics">
          <FaChartPie />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/settlement">
          <FaExchangeAlt />
          <span>Settlement</span>
        </NavLink>

        <NavLink to="/reports">
          <FaFileAlt />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/settings">
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;