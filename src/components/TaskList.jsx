const TaskList = ({tasks}) => {
    return (
        <ul className={styles.tasks}>
            {
                tasks.map(task => {
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                })
            }
            
        </ul>
        )
}

export default TaskList;
