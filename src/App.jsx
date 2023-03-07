import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'

function App() {
  const [count, setCount] = useState(0);

  // Function to take tasks
  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
       {/* Gives CustomForm access to this Function form App.jsx */}
      <CustomForm addTask={addTask}/>
    </div>
  )
}

export default App