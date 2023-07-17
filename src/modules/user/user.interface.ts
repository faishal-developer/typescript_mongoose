import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    role: string,
    password: string,
    name: {
        firstName: string,
        lastName: string,
    }
    email?: string,
}
//instance methods
export interface IUserMethods {
    fullName(): string;
}


//static methods
// export interface UserModel extends Model<IUser>{
//     getAdminUsers():IUser[];
// }
export interface UserModel extends Model<IUser,{},IUserMethods>{
    getAdminUsers():Promise<HydratedDocument<IUser,IUserMethods>>;
}

