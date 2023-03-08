import TaskItem from './TaskItem'


import styles from './TaskList.module.css'  // makes styles usable by the below component

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
    return (
        <ul className={styles.tasks}> {/* Applies common style sheet to the list */ } 
            {
                tasks.sort((a, b) => b.id - a.id).map(task => (
                    <TaskItem
                        key={task.id}
                        task={task} 
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        enterEditMode ={enterEditMode}
                    />
                ))
            }
            
        </ul>
        )
}

export default TaskList;