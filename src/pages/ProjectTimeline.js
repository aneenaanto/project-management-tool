import React from "react";
import { GanttChart } from "@reactchartjs/react-chartjs";

const tasks = [
  { id: 1, task: "Design UI", start: "2025-02-20", end: "2025-02-22" },
  { id: 2, task: "Develop Backend", start: "2025-02-22", end: "2025-02-26" },
];

function ProjectTimeline() {
  return (
    <div className="container mt-4">
      <h2>Project Timeline (Gantt Chart)</h2>
      <GanttChart data={tasks} />
    </div>
  );
}

export default ProjectTimeline;
