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

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
       {/* Gives CustomForm access to this Function form App.jsx */}
      <CustomForm addTask={addTask} />
      {/* Tasks iff exists is passed to task list and it is called */}
      {tasks && <TaskList tasks={tasks} />}
    </div>
  )
}

export default App