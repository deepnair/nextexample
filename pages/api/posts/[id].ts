import { todos } from "../../../data";
import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../todos";

const handler = ({query: {id}}: NextApiRequest, res: NextApiResponse) => {
    let filtered:TodoType[] = []
    if (typeof(id) === 'string'){
        filtered = todos.filter((todo) => todo.id === parseInt(id))
    }
    filtered.length > 0 ? res.status(200).json(filtered[0]) : res.status(404).json({message: `Todo ${id} was not found`})
    
}

export default handler;