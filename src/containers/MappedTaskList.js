import { connect } from 'react-redux'
import {
  removeTask, 
  allowEdit, 
  highlightTask,
  completeTask,
 } from '../redux/actions'
import {TaskList} from '../components/TaskList'

const mapStateToProps = (state) => ({
  tasks: state.allTasks
});

const mapDispatchToProps = dispatch => ({
  onTaskComplete: id => {
    dispatch(highlightTask(id))
  },
  onDeleteTask: id => {
    dispatch(removeTask(id))
  },
  onAllowEdit: id => {
    dispatch(allowEdit(id))
  },
  completeTask: id => {
    dispatch(completeTask(id))
  },
});

{/******     state and props mapped to TaskList Component    *******/}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);