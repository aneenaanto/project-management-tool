import React from "react";

function Sidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: "250px" }}>
      <h4>Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/tasks">Tasks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/team">Team</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
