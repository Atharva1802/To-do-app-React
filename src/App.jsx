import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusElement, setPreviousFocusElement] = useState(null);


  // Function to take tasks
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task]) //Update the array of tasks 
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  // Duplicate tasks update prevention
  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (

      t.id === id ? {...t, checked: !t.checked} : t   // Updates task iff not already id'd
      
    )))
  }

  const updateTask = (task) => {
  setTasks(prevState => prevState.map(t => (

    t.id === task.id
      ? { ...t, name: task.name }
      : t   // Updates task iff not already id'd
  )))
    // TODO: To close Edit Task mode
    closeEditMode();
  }
  
  const closeEditMode = () => {
    setIsEditing(false)
    // set focus to the previous state
    previousFocusElement.focus()  // retains the editing item from previous focus taskItem
    // In the editing pane
  }
  
  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusElement(document.activeElement)
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
       {/* Gives CustomForm access to this Function form App.jsx */}
      <CustomForm addTask={addTask} />
      {
        isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          enterEditMode={enterEditMode}
          closeEditMode={closeEditMode}
        />
        )
      }
      
      
      {/* Tasks iff exists is passed to task list and it is called */}
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default App