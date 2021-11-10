import { GetStaticPaths, GetStaticProps } from "next"
import { server } from "../../../config"
import { TodoInObjectType, TodoType } from "../../todos"
import Link from 'next/link'

const index = ({todo}: TodoInObjectType) => {
    return (
        
            <details>
                <summary>{todo.title}</summary>
                <h3>Current status: {todo.completed? 'Completed': 'Not Completed'}</h3>
                <Link href="/"><a>Go back home</a></Link>
            </details>
 
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`${server}/api/posts/${context.params.id}`)
    const data = await res.json();

    return{
        props:{
            todo: data
        }
    }
}

interface ParamsType{
    params: IdType
}

interface IdType{
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${server}/api/posts`)
    const data = await res.json();
    const paths = data.reduce((prev: ParamsType[], curr: TodoType) => {
        prev.push({params: {id: curr.id.toString()}})
        return prev;
    }, [])

    return{
        paths,
        fallback:false
    }
}

export default index
