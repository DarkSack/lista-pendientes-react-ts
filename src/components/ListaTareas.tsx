import { Task } from "./Task";

type Props = {
  listaTareas: string[];
  borrarTarea: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, borrarTarea }: Props) => {
  return (
    <div>
      <div className="taskList">
        {listaTareas.map((tarea, index) => (
          <Task
            key={index}
            tarea={tarea}
            borrarTarea={() => borrarTarea(index)}
          ></Task>
        ))}
      </div>
    </div>
  );
};
