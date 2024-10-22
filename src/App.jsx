import { useState } from "react";
import DefaultPage from "./components/DefaultPage";
import ProjectForm from "./components/ProjectForm";
import ProjectDetails from "./components/ProjectDetails";
import Sidebar from "./components/Sidebar";
import { INIT_PROJECT, generateID } from "./Utility";

function App() {
  // State to track which component to render
  const [count, setCount] = useState(INIT_PROJECT.length); // Counter to track IDs generated
  const [activeComponent, setActiveComponent] = useState('createNewProject');
  const [projects, setProjects] = useState(INIT_PROJECT);
  const [currentProject, setCurrentProject] = useState({});

  const showProjectForm = () => {
    setCurrentProject({})
    setActiveComponent('projectForm');
  };

  const handleSubmit = (projData) => {
    const projDataID = generateID(count, setCount);

    setProjects((prevProjects) => {
      const updatedProjects = [
        ...prevProjects,
        { id: projDataID, ...projData }
      ];

      setCurrentProject(updatedProjects.find((proj) => proj.id === projDataID)); // Set the current project after updating
      return updatedProjects;
    });

    setActiveComponent('projectDetails');
  };

  const handleCancel = () => {
    setActiveComponent('createNewProject');
  };

  const handleDeleteProject = (currentProjID) => {
    const remainingProjects = projects.filter(
      (proj) => proj.id !== currentProjID
    );
    setProjects(remainingProjects);
    setActiveComponent('createNewProject');
  };

  const handleCurrentProjectClick = (projectID) => {
    const project = projects.find((proj) => proj.id === projectID); // Retrieve the full project object
    setCurrentProject(project); // Set the current project to the full object
    setActiveComponent('projectDetails');
  };

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar
        currentProject={currentProject}
        handleCurrentProjectClick={handleCurrentProjectClick}
        projects={projects}
        showProjectForm={showProjectForm}
      />
      {activeComponent === 'createNewProject' ? (
        <DefaultPage showProjectForm={showProjectForm} />
      ) : activeComponent === 'projectForm' ? (
        <ProjectForm handleSubmit={handleSubmit} handleCancel={handleCancel} />
      ) : activeComponent === 'projectDetails' ? (
        <ProjectDetails
          currentProject={currentProject}
          handleDeleteProject={handleDeleteProject}
        />
      ) : (
        ''
      )}
    </main>
  );
}

export default App;