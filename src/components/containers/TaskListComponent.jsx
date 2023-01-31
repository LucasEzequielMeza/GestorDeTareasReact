import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.ckass'
import TaskForm from '../pure/forms/TaskForm'
import TaskComponent from '../pure/TaskComponent'
// Importamos la hoja de estilos de task.scss
import './../../styles/task.scss'

const TaskListComponent = () => {
    const defaultTaskOne = new Task('Example One', 'Description One', true, LEVELS.NORMAL);
    const defaultTaskTwo = new Task('Example Two', 'Description Two', false, LEVELS.URGENT);
    const defaultTaskThree = new Task('Example Three', 'Description Three', false, LEVELS.BLOCKING);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTaskOne, defaultTaskTwo, defaultTaskThree])
    const [loading, setLoading] = useState(true)

    //Control del ciclo de vida del componente
    useEffect(() => {
      console.log('Task State has been modified')
      setLoading(false)
      return () => {
        console.log('TaskListComponent is going to unmount... ')
      };
    }, [tasks]);

    const changeCompleted = (id) => {
      console.log('TODO: Cambiar estado de una tarea')
    }

  return (
    <div>
        <div className="col-12">
                <div className="card">
                    {/**Card header (title) */}
                    <div className="card-header p-3">
                        <h5>Your Task: </h5>
                    </div>
                    {/**Card Body (content) */}
                    <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px"}}>
                        <table>
                          <thead>
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Description</th>
                              <th scope="col">Priority</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            { tasks.map((task, index) => {
                                return (
                                  <TaskComponent key={index} task={task}/>
                                )
                            })}
                          </tbody>
                        </table>
                  </div>
                  <TaskForm/>
                </div>
            </div>
    </div>
  )
}

export default TaskListComponent