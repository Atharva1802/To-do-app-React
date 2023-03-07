import React from 'react';
import { useState } from 'react';


// library imports
import { PlusCircleIcon } from '@heroicons/react/24/solid'

// destructured prop in the arrow fucntion below (from App.jsx)
const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();     // prevents alteration on refresh
      addTask({
      // Task object
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo"
      // HTML works best with onSubmit rather than using onClickListener
      onSubmit={handleFormSubmit}  
      
      >
      <div className="wrapper">
        {/* Virtual Dom keeps value and updates its value as the state updates */}
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label
          htmlFor="task"
          className="label"
        >Add a task</label>
      </div>
      <button
        className="btn"
        aria-label="Add Task"
        type="submit"
        >
        <PlusCircleIcon />
      </button>
    </form>
  )
}
export default CustomForm;