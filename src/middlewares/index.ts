import express from "express";
import { get, identity, merge } from "lodash";

import { getUsersBySessionToken } from "../db/user";

export const isAuthenticated:any = async (req: express.Request , res: express.Response) =>{
    try {
        const sessionToken = req.cookies['ANTONIO-AUTH'];

        if(!sessionToken){
            return res.sendStatus(403);

        }

        const existingUser = await getUsersBySessionToken(sessionToken);

        if(!existingUser){
            return res.sendStatus(403);
        }

        merge (req, {identity : existingUser})

    }catch (error){
        console.log(error);
        return res.sendStatus(400)
    }
}