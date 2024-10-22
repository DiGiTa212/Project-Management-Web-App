import { forwardRef } from "react";
import ProjectTask from "./ProjectTask";
import TaskInput from "./TaskInput";

const Tasks = forwardRef(
  ({ handleAddTask, handleDeleteTask, projectTasks }, ref) => {
    const olOnClick = (e) => {
      const listItem = e.target.closest('li');
      const isClearBtn = e.target.id === 'clearBtn';

      if (listItem && isClearBtn) {
        const projectId = listItem.id;
        handleDeleteTask(projectId); // Pass the project ID to the handler
      }
    };

    const NoTaskRemain = () => (
      <p className="text-stone-800 my-4">
        You have not assigned any tasks yet...
      </p>
    );

    return (
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <TaskInput handleAddTask={handleAddTask} ref={ref} />
        <ol onClick={olOnClick} className="p-4 mt-8 rounded-md bg-stone-100">
          {projectTasks.length > 0 ? (
            projectTasks.map((task) => (
              <ProjectTask id={task.id} key={task.id} task={task.task} />
            ))
          ) : (
            <li id="noTasks">
              <NoTaskRemain />
            </li>
          )}
        </ol>
      </section>
    );
  }
);

export default Tasks;