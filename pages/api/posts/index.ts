import { NextApiRequest, NextApiResponse } from "next";
import {todos} from '../../../data'


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(todos)
}

export default handler;