const mongoose=require('mongoose')
const Schema=mongoose.Schema
const buildingsSchema=new Schema({
    userId:{type:Schema.Types.ObjectId,ref:'User',required:true},
    name:{type:String,required:true},
    address:{type:String,required:true},
    landmark:{type:String,required:true}
})
const Buildings=mongoose.model('Buildings',buildingsSchema)
module.exports=Buildings