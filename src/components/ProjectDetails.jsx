import { useRef, useState } from "react";
import { formatDate, generateID, INITIAL_PROJECT_TASKS } from "../Utility";
import CustomDiv from "./CustomDiv";
import Tasks from "./Tasks";

export default function Project ({ currentProject, handleDeleteProject }) {
  const [count, setCount] = useState(INITIAL_PROJECT_TASKS.length); // Counter to track IDs generated
  const [projectTasks, setProjectTasks] = useState(INITIAL_PROJECT_TASKS);
  const taskInputRef = useRef()

  const formattedDate = new Date(currentProject.dueDate);

  const onDeleteProject = () => {
    handleDeleteProject(currentProject.id)
  }

  const handleDeleteTask = (taskID) => {
    const remainingTasks = projectTasks.filter(proj => proj.id !== taskID);
    setProjectTasks(remainingTasks)
  }

  const handleAddTask = () => {
    const inputValue = taskInputRef.current.value.trim();

    if (inputValue) {
      const taskID = generateID(count, setCount) + generateID(count, setCount)
      setProjectTasks((prevTasks) => {
        const updatedProjects = [
          ...prevTasks,
          { id: taskID, task: inputValue }
        ];
        return updatedProjects;
      });

      taskInputRef.current.value = ''
    }
  }

  return (
    <CustomDiv>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {currentProject.title}
          </h1>
          <button
            onClick={onDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatDate(formattedDate)}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {currentProject.description}
        </p>
      </header>
      <Tasks
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
        projectTasks={projectTasks}
        ref={taskInputRef}
      />
    </CustomDiv>
  );
}