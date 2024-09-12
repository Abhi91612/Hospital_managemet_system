import mongoose from "mongoose";



export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HOSPITAL-MANAGEMENT-SYSTEM",
    }).then(()=>{
        console.log("Connected to database");
    }).catch(err=>{
        console.log(`SOME ERROR OCCUR WHILE CONNECTING TO DATABASE :${err}`);
    })
}