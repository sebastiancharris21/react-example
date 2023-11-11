import { createContext, useEffect, useState } from "react";
import { task as data, task } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  //Funcion para crear una tarea.
  function createTask(task) {
    setTask([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        descripcion: task.descripcion,
      },
    ]);
  }

  //Crear funcion para elimnar un tarea.
  function deleteTask(taskId) {
    //console.log(tasks);
    //tasks.filter(task=> task.id !== taskId);
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
