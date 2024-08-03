import React, { useEffect, useState } from "react";
import { Task } from "/imports/api/tasks";

export function TaskItem({ task }: { task: Task }) {
  const [displayStatus, setDisplayStatus] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setDisplayStatus(window.innerWidth > 400);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <li>
      {task.title} {displayStatus && <span>({task.status})</span>}
    </li>
  );
}
