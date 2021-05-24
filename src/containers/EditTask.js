import React from 'react'
import {connect} from 'react-redux'
import {editTask} from '../redux/actions'
import {EditTask} from '../components/EditTask'

/******     Edit Task Controller     *******/
const  mapDispatchToProps = dispatch => ({
  editTask: (id, text) => dispatch(editTask(id,text)),
});

export default connect(null, mapDispatchToProps)(EditTask);