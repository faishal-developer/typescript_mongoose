import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUser = async (payload:IUser):Promise<IUser> => {
    const user = new User(payload);//instance
    console.log(user.fullName());
    await user.save();//built in instance method
    return user;
}

export const getUsersFromDB= async():Promise<IUser[]>=>{
    const users= await User.find();
    return users;
}

export const getSingleUserFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ role: payload },{name:1,email:1});
    return user;
}

export const getAdminUsersFromDB=async(payload:string)=>{
    const admins= await User.getAdminUsers();
    return admins;
}