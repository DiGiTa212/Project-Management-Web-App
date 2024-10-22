import { forwardRef } from "react";

const TaskInput = forwardRef(({handleAddTask}, ref) =>{

  return (
    <div id='taskInputDiv' className="flex items-center gap-4">
      <input
        id='taskInput'
        ref={ref}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        placeholder="Write your tasks here..."
      />
      <button
        id='taskInputBtn'
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
})

export default TaskInput;