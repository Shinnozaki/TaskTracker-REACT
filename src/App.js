import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react"

function App() {

  const name = 'Joen'

  const [showAddForm, setShowAddForm] = useState(false)

  const [taskState, setTask] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])

  const addTask = (added) =>
  {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...added}
    setTask([...taskState, newTask])
  }

  const deleteTask = (id) => {
    setTask(taskState.filter((taskProp)=> taskProp.id !== id))
  }

  const toggleReminder = (id) =>
  {
    setTask(taskState.map((tugas)=> tugas.id === id ? {...tugas, reminder:!tugas.reminder} : tugas))
    
  }

  return (

    <div className="container">

      <Header title = "Task Tracker" onAdd={()=>setShowAddForm(!showAddForm)} showAdd={showAddForm}/>

      {showAddForm && <AddTask onAdd={addTask}/>}

      <h1>{name}'s Tasks</h1>

      {taskState.length > 0 ?
        (<Tasks taskProp={taskState} onDelete={deleteTask} onToggle={toggleReminder}/>)
        :
        (
          'no tasks available'
        )
      }

    </div>

  );

}


export default App;
