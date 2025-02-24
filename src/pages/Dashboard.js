import React from "react";

function Dashboard() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Projects</h5>
              <p className="card-text display-4">12</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Active Tasks</h5>
              <p className="card-text display-4">24</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-light shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Team Members</h5>
              <p className="card-text display-4">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
