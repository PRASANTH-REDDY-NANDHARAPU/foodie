const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone_number:{type:Number,required:true},
    password:{type:String,required:true},
    role:{type:Number,default:0},
})
const User=mongoose.model('users',userSchema)
module.exports=User