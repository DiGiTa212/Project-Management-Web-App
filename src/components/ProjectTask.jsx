import { capitalizeFirstLetter } from "../Utility";

export default function ProjectTask({id, task}) {
  return <li id={id} className="flex justify-between my-4">
    <p>{capitalizeFirstLetter(task)}</p>
    <button id='clearBtn' className="text-stone-700 hover:text-red-500">Clear</button>
  </li>
}