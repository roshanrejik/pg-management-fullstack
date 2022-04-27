const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ternantsSchema=new Schema({
    name:{type:String,required:true},
    adhaar:{type:Number,required:true},
    email:{type:String,required:true},
    roomId:{type:Schema.Types.ObjectId,ref:'Rooms',required:true},
    buildingId:{type:Schema.Types.ObjectId,ref:'Buildings',required:true}
})
const Ternants=mongoose.model('Ternants',ternantsSchema)
module.exports=Ternants