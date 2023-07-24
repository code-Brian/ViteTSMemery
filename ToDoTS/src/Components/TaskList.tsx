import {useState} from 'react'
import {Task} from '../Components/Task'

interface taskComponents {
    tasks: [];
}

export const TaskList: React.FC<taskComponents> = ({tasks}) => {

    const handleDelete = (index:number) => {
        let prevTasks = tasks.filter((_,i) => i !== index)
        setTasks([...prevTasks])
    }

    return (
        <ul>
    {
        tasks.map((task, index) => (
            <li key={index}>{task}<button style={{marginLeft: "16px"}}onClick={() => handleDelete(index)}>Delete</button></li>
        ))
    }
    </ul>
    )
}
