import Button from "./Button";
import SideBarProject from "./SidebarProject";

const SideBar = ({
  currentProject,
  handleCurrentProjectClick,
  projects,
  showProjectForm
}) => {

  const olOnClick = (e) => {
    const li = e.target.closest('li');
    if (li) {
      const projectId = li.id;
      // Prevent clicking on the current project from triggering another click
      if (projectId === currentProject.id) {
        return;
      }

      handleCurrentProjectClick(projectId); // Pass the project ID to the handler
    }
  };

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button
          onClick={showProjectForm}
        >+ Add Project</Button>
      </div>
      <ol onClick={olOnClick} className="mt-8">
        {Object.values(projects).map((proj) => {
          return (
            <SideBarProject
              id={proj.id}
              key={proj.id}
              active={currentProject && currentProject.id === proj.id}
              projectTitle={proj.title}
            />
          );
        })}
      </ol>
    </aside>
  );
};

export default SideBar;
