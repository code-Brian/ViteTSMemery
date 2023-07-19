import {useState} from 'react'

interface FormData {
    task: string
}

export const ToDoForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(
        {
            task:''
        }
    )
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // do some stuff
        console.log(formData)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Task:</label>
                <input type="text" name="task" value={formData.task} onChange={handleChange}/>
            </div>
            <button>Create Task</button>
        </form>
    )
}
