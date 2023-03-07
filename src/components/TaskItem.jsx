import { useState } from 'react'

import styles from './TaskItem.module.css'
import { CheckIcon } from '@heroicons/react/24/outline'

const TaskItem = ({ task }) => {
    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckboxchange = (e) => setIsChecked(!isChecked);

  return (
      <li className={styles.task}>
          <div className="task-group">
              <div className={styles["task-group"]}>
                  <input
                      className={styles.checkbox}
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxchange}
                      name={task.name}
                      id={task.id}
                  >
                  </input>
                  <label
                      htmlFor={task.id}
                      className={styles.label}
                  >
                      {task.name}
                      <p className={styles.checkmark}>
                          <CheckIcon
                              strokeWidth={5}
                              width={24}
                              height={24}
                          />
                      </p>
                  </label>
              </div>
          </div>
      </li>
  )
  }
export default TaskItem