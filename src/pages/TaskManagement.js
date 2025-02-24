import React, { useState } from "react";

function TaskManagement() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Fix UI Bugs", priority: "High" },
    { id: 2, name: "Database Optimization", priority: "Medium" },
  ]);

  const prioritizeTasks = () => {
    const updatedTasks = tasks.map(task => ({
      ...task,
      priority: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)],
    }));
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h2>AI Task Prioritization</h2>
      <button className="btn btn-primary mb-3" onClick={prioritizeTasks}>
        Auto-Prioritize Tasks (AI Simulation)
      </button>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item">
            {task.name} - <strong>{task.priority}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManagement;
