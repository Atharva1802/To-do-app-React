import React, { useEffect } from 'react';
import { useState } from 'react';


// library imports
import { CheckIcon } from '@heroicons/react/24/solid'

// destructured prop in the arrow fucntion below (from App.jsx)
const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setupdatedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === 'Escape' && closeEditMode()
    }
    window.addEventListener('keydown',
      closeModalIfEscaped)
    
    // Cleanup Function for keydown listener
    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();     // prevents alteration on refresh
    updateTask({...editedTask, name: updatedTaskName })
  }

  return (
    <div
      role="dialog"
      aria-labelledby='editTask'
      // onClick ={}
    >
    <form
      className="todo"
      // HTML works best with onSubmit rather than using onClickListener
      onSubmit={handleFormSubmit}  
      
      >
      <div className="wrapper">
        {/* Virtual Dom keeps value and updates its value as the state updates */}
        <input
          type="text"
          id="editTask"
          className="input"
          value={updatedTaskName}
          onInput={(e) => setupdatedTaskName(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Update Task"
          />
        <label
          htmlFor="editTask"
          className="label"
          >Update task</label>
      </div>
      <button
        className="btn"
        aria-label={`Confirm Task to be updated to ${updatedTaskName}`}
        type="submit"
        >
          <CheckIcon
            strokewidth={2}
            height={24}
            width={24}
          />
      </button>
    </form>
  </div>
  )
}
export default EditForm;