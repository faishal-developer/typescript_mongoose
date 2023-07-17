import { HydratedDocument, Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser,{},IUserMethods>;

// creating schema
const userSchema = new Schema<IUser,UserModel,IUserMethods>({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String, required: true, unique: true
    },
})
// adding static method
userSchema.static("getAdminUsers",async function getAdminUsers(){
    const admins = await this.find({role:"admin"});
    return admins;
})

//adding instance method
userSchema.method("fullName",function fullName(){
    return this.name.firstName+" "+this.name.lastName;
})

// model
export const User = model<IUser,UserModel>("User", userSchema);