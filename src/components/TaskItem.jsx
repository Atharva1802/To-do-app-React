import styles from './TaskItem.module.css'

const TaskItem = ({ task }) => {
  return (
      <li className={styles.task}>
          <div className="task-group">
              <div className={styles["task-group"]}>
                  <input
                      type="checkbox"
                  ></input>
              </div>
          </div>
      </li>
  )
  }
export default TaskItem