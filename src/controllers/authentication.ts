import { getUsersByEmail } from "db/user";
import express from "express";


export const register = async (req: express.Request , res: express.Response) =>{
    try {
        const {email , password , username} = req.body

        if(!email || !password || !username){
            return res.sendStatus(400)
        }

        const existingUser = await getUsersByEmail
    }catch (error){
        console.log(error)
        return res.sendStatus(400)
    }
}