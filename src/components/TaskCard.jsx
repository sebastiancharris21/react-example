import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({tasks}) {
  //const valor = useContext(TaskContext);
  //console.log(valor);
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize ">{tasks.title}</h1>
      <p className="text-sm text-gray-500">{tasks.descripcion}</p>
      <button
        className="px-2 py-1 bg-red-600 rounded-md mt-4 hover:bg-red-500"
        onClick={() => {
          deleteTask(tasks.id);
        }}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
