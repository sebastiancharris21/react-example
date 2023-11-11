import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const { tasks } = useContext(TaskContext); // contiene el objeto de tareas {delete}

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl text-center font-bold">No hay tareas! </h1>;
  } else {
    return (
      <div className="grid grid-cols-4 p-4 gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} tasks={task} />
        ))}
      </div>
    );
  }
}
