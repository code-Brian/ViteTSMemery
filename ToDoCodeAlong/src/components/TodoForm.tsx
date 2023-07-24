import {useState} from 'react'
import {TodoList} from './TodoList'

interface todoItem {
    text: string
    complete: boolean
}

export const TodoForm: React.FC = () => {
    const [newTodo, setNewTodo] = useState<string>("")
    const [todos, setTodos] = useState<todoItem[]>([])

    const handleNewTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(newTodo.length === 0)
        {
            return
        }
        const todoItem = {
            text: newTodo,
            complete: false
        }
        console.log(newTodo)
        setTodos([...todos, todoItem])
        console.log(todos)
        console.log(todoItem)
        setNewTodo("")
    }

    const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
        console.log(newTodo)
    }
    
    return (
        <div style={{textAlign:"center"}}>
            <form onSubmit={handleNewTodoSubmit}>
                <input type="text" onChange={handleTodoChange} value={newTodo}/>
                <div>
                    <button>Add Todo</button>
                </div>
            </form>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    )
}
