import express from 'express';
import mongoose from 'mongoose';
import app from './app';

const port:number = 5005
async function Bootstrais() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        // console.log("database connected");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }catch(err){
        console.log("err.message");
    }
}
Bootstrais();

// create table Student(
//     Roll_no number(5),
//     Name varchar2(10),
//     Age number(5),
//     Gender varchar2(10),
//     city varchar2(10)
// );
