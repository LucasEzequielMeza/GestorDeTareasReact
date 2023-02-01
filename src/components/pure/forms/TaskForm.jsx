import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.ckass'

const TaskForm = ({add}) => {

  const nameRef = useRef()
  const descriptionRef = useRef()
  const levelRef = useRef(LEVELS.NORMAL)

  function addTask (e) {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
      )
      add(newTask)
  }

  return (
    <form onSubmit={addTask} className="d-flex justify-content-center aling-items-center mb-a" >
      <div className="form-outline flex-fill">
        <input ref={nameRef} id="inputName" type="text" placeholder="Task name" className="form-control form-control-lg" required autoFocus/>
        <input ref={descriptionRef} id="inputDescription" type="text" placeholder="Task description" className="form-control form-control-lg" required/>
        <label htmlFor='selectLevel' className="sr-only">Priority</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <button type='submit' className="btn btn-success btn-lg ms-3">Add</button>
    </form>
  )
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
}

export default TaskForm