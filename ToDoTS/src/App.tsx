import {useState} from 'react'
import {ToDoForm} from './Components/ToDoForm'
import {TaskList} from './Components/TaskList'

function App() {
  const [formData, setFormData] = useState('')

  return (
    <>
      <ToDoForm/>
      <TaskList/>
    </>
  )
}

export default App
