import { TodoInObjectType } from "../pages/todos"
import Link from 'next/link'


const Todo = ({todo}:TodoInObjectType) => {

    console.log(todo);
    return (
        <Link href={`/posts/${todo.id}`}>
            <details>
                <summary>{todo.title}</summary>
                <p>Is it completed? {todo.completed ? 'Yes' : 'No'}</p>  
            </details>
        </Link>
    )
}

export default Todo
