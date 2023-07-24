interface todoItem {
    text: string
    complete: boolean
}

interface todoListProps {
    todos: todoItem[]
    setTodos: React.Dispatch<React.SetStateAction<todoItem[]>>
}

export const TodoList: React.FC<todoListProps> = ({todos,setTodos}) => {
    const handleTodoDelete = (deleteIndex:number) => {
        console.log(deleteIndex)
        const filteredTodos = todos.filter((_todo:todoItem, index:number) => {
            return index !== deleteIndex
        })
        setTodos(filteredTodos)
    }

    const handleToggleComplete = (index: number) => {
        const updatedTodos = todos.map((todo:todoItem, i:number) => {
            if(index === i){
                const updatedTodo = {...todo, complete: !todo.complete}
                return updatedTodo
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h2>Todos:</h2>
            <ul>
                {
                    todos.map((todo:todoItem, index:number) => (
                        <li style={{listStyle: "none"}} key={index}>
                            <input onChange={() => handleToggleComplete(index)} checked={todo.complete} type="checkbox"/>
                            {
                                todo.complete ? <span style={{textDecoration: "line-through"}}>{todo.text}</span> : 
                                <span>{todo.text}</span>
                            }
                            <button style={{marginLeft: "16px"}} onClick={() => handleTodoDelete(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
