import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
       {/* Gives CustomForm access to this Function form App.jsx */}
      <CustomForm addTask={addTask} />
      {/* Tasks iff exists is passed to task list and it is called */}
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask ={toggleTask}
        />
      )}
    </div>
  )
}

export default App