import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState(""); // estado incial del estado es vacio.
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  //const valor = useContext(TaskContext);
  //console.log(valor);

  const hadleTitle = (e) => {
    e.preventDefault(); // evento que cancela el comportamiento por defecto.
    console.log(title, descripcion);
    createTask({
      title,
      descripcion,
    });
    setDescripcion("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={hadleTitle} className="bg-slate-400 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-1">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripocion de la tarea"
          onChange={(event) => {
            setDescripcion(event.target.value);
          }}
          value={descripcion}
        ></textarea>
        <button className="bg-green-600 px-2 py-1 text-white hover:bg-green-500">
          Guardar
        </button>
      </form>
    </div>
  );
}

/**
     * al momento de crear la constaste new task (objeto), se convetira en el valor que va agregar en la funcion createtak
     * que se encuentra alojada en el componente APP
     * const newTask ={
        title
    } 
    createTask(newTask);
    */
