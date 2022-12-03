import {FaTimes} from 'react-icons/fa'

const Task = ({taskProp, onDelete, onToggle}) => {
  return (
    <div className={`task ${taskProp.reminder ? 'reminder'  : ''}`}>
      <h3>{taskProp.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={()=>onDelete(taskProp.id)}/></h3>
      <p onClick={()=>onToggle(taskProp.id)}>{taskProp.day}</p>
    </div>
  )
}

export default Task
