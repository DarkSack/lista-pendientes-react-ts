import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listaTareas, setListaTareas] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, newTask]); // Agrega la nueva tarea a la lista de tareas
    setNewTask(""); // Limpia el campo de entrada después de agregar la tarea
  };

  const handleBorrarTarea = (index: number) => {
    setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
    // // Implementa la lógica para borrar la tarea según el índice
    // const updatedTareas = [...listaTareas];
    // updatedTareas.splice(index, 1);
    // setListaTareas(updatedTareas);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={handleAddTask}>Agregar</button>
        <ListaTareas
          listaTareas={listaTareas}
          borrarTarea={handleBorrarTarea}
        />
      </div>
    </div>
  );
};

// Componente ListaTareas
