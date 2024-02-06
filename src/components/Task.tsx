type Tarea = {
  tarea: string;
  borrarTarea: () => void;
};

export const Task = ({ tarea, borrarTarea }: Tarea) => {
  return (
    <div className="task">
      <span>{tarea}</span>
      <button onClick={borrarTarea}>Borrar</button>
    </div>
  );
};
