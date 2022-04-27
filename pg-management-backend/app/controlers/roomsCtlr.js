const Rooms=require('../models/rooms')
const roomsCtlr={}
roomsCtlr.list=(req,res)=>{
    Rooms.find()
    .then(building=>res.json(building))
    .catch(err=>res.json(err))
}
roomsCtlr.findOne=(req,res)=>{
    const id=req.params.id
    Rooms.findById(id)
    .then(room=>res.json(room))
    .catch(err=>res.json(err))
}
roomsCtlr.create=(req,res)=>{
    const body=req.body
    const rooms=new Rooms(body)
    rooms.save()
    .then(room=>res.json(room))
    .catch(err=>res.json(err))
}
roomsCtlr.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Rooms.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(room=>res.json(room))
    .catch(err=>res.json(err))
}
roomsCtlr.remove=(req,res)=>{
    const id=req.params.id
    Rooms.findByIdAndDelete(id)
    .then(room=>res.json(room))
    .catch(err=>res.json(err))
}
module.exports=roomsCtlr