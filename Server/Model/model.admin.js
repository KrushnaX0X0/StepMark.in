import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    email:{
        type : String ,
         required : true
    },
    passworld :{
        type : String ,
        required : true
    } 
},{timestamps:true})

const admin = mongoose.model("admin",adminSchema)
export default admin