import { GetStaticProps, NextPage } from "next"
import React from "react"
import Todo from "../components/Todo"
import { server } from "../config"
import axios from 'axios'
import Layout from "../components/Layout"

export interface TodoType{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface TodoInObjectType{
    todo: TodoType
}

export interface TodosType{
    todos: TodoType[]
}

const todos = ({todos}:TodosType) => {
    console.log(todos);

    return (
        <>
            <h1>This is the todos page</h1>
            {todos.map((todo:TodoType, index) => {
                return (<Todo key={index} todo={todo} />)
            })} 
        </>
    )
}

todos.getLayout = (page: typeof todos) => {
    return(<Layout>{page}</Layout>)
}

export const getStaticProps: GetStaticProps = async() => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
    const res = await fetch(`${server}/api/posts`)
    // const res = await axios.get(`${server}/api/todos`, {
    //     headers: {
    //         Accept: 'application/json, text/plain, */*',
    //         'User-Agent': '*',
    //       }
    // })
    console.log(res);
    // const data = await JSON.stringify(res)
    const data = await res.json();

    return{
        props:{
            todos: data
        } 
    }
}

export default todos;
