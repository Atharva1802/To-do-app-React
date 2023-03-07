import styles from './TaskItem.module.css'
import { CheckIcon } from '@heroicons/react/24/outline'

const TaskItem = ({ task }) => {
  return (
      <li className={styles.task}>
          <div className="task-group">
              <div className={styles["task-group"]}>
                  <input
                      type="checkbox"
                      checked={task.checked}
                    //   onChange={}
                      name={task.name}
                      id={task.id}
                  >
                  </input>
                  <label
                      htmlFor={task.id}
                      className={styles.label}
                  >
                      {task.name}
                      <p className={styles.checkmark}></p>
                  </label>
              </div>
          </div>
      </li>
  )
  }
export default TaskItem