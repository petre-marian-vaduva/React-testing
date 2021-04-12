import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30',
            reminder: true,
        },  
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 2:30',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30',
            reminder: false,
        },
    ] 
)

//delete Task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
    ? { ...task, reminder: !task.reminder } 
    : task))
}


  return (
    <div className='container'>
     <Header />
     <AddTask />
     {tasks.length > 0 ? (
     <Tasks tasks={tasks} onDelete=
     {deleteTask} onToggle={toggleReminder} /> 
      ) : (
         'No Tasks to show'
         )}
    </div>
  )
}


export default App
