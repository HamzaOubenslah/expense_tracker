import { Schema,Types,model } from "mongoose";


const incomeSchema=new Schema({
    title:{type:String,required:true,trim:true,maxLength:50},
    // user_id:{type:Schema.Types.ObjectId,ref:'User',required:true},
    amount:{type:Number,required:true,maxLength:20,trim:true},
    type:{type:String,default:'income'},
    date:{type:Date,default:Date.now,trim:true},
    category:{type:String,required:true,trim:true},
    description:{type:String,required:true,maxLength:40,trim:true},
})

export const incomeModel=model('Income',incomeSchema)