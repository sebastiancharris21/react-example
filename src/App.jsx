import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
//import { task as data, task } from "./data/task";
//import { useState, useEffect } from "react"; //libreria

export default function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

//const [tasks, setTask] = useState([]); //Envio una arreglo vacio con el estado inicial antes renderizar.

/**
 *  useEffect(() => {
    setTask(data);
  }, []); //actualiza el estado, de vacio lleno de la informacion de task.
 */

/**
   * //Crear un un funcion que relacione las tareas agregadas con la tareas
  function createTask(task) {
    //[...tasks, task] esta forma, no altera el arreglo de objetos almacenados en task.
    setTask([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        descripcion: task.descripcion,
      },
    ]);
  }
   */

/**
 * //Crear funcion para elimnar un tarea.
 * function deleteTask(taskId) {
    //console.log(tasks);
    //tasks.filter(task=> task.id !== taskId);
    setTask(tasks.filter((task) => task.id !== taskId));
  }
 */
