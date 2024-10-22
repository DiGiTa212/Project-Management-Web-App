import { capitalizeFirstLetter } from "../Utility";
import { memo } from "react";

const SideBarProjects = memo(({id, active, projectTitle}) => {
  const sideBarProjectsCSS = active
    ? 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-100 bg-stone-800'
    : 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 cursor-pointer';

  return (
    <li id={id}>
      <p className={sideBarProjectsCSS}>
        {capitalizeFirstLetter(projectTitle)}
      </p>
    </li>
  );
})

export default SideBarProjects;