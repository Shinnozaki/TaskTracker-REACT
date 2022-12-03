import Task from "./Task"

const Tasks = ({taskProp, onDelete, onToggle}) => {

  return (
    <>
        {/* kita looping for each tasks text, lalu kasih id sebagai key */}
        {taskProp.map((tugas) => 
            (
                <Task key={tugas.id} taskProp={tugas} onDelete={onDelete} onToggle={onToggle}/>
            ))
        }
    </>
  )
}

export default Tasks