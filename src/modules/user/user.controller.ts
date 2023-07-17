import { NextFunction, Request, Response } from "express";
import { createUser, getAdminUsersFromDB, getSingleUserFromDB, getUsersFromDB } from "./user.service";
import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserCon=async(req: Request, res: Response, next: NextFunction) => {
    // res.send('Hello World!')
    // creating an interface
    const data:IUser= req.body;
    const user = await createUser(data);
    res.status(200).json({
        status:"success",
        data:user
    })
}

export const getUsers=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    const users= await getUsersFromDB();
    res.status(200).json({
        users:users
    })
}

export const getUserById=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    let id = req.params.id;
    const user = await getSingleUserFromDB(id);
    console.log(user)
    res.status(200).json({user});
}

export const getAdminUsers=async(req:Request,res:Response,next:NextFunction)=>{
    const user = await getAdminUsersFromDB("id");
    res.status(200).json({user})
}