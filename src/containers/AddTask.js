import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../redux/actions'

/******  Add Task Controller *******/
const AddTask = ({dispatch}) => {
  let input;
  return (
    <div className="add-task">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) return
          {/******     connected to Redux action addTask(taskTitle)    *******/}
          dispatch(addTask(input.value));
          input.value = ''
        }}
      >
        <input
          placeholder={'Add Task'}
          className="input"
          ref={node => (input = node)} 
        />
        <button 
          className="add-btn"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  )
}
export default connect()(AddTask);