const Buildings=require('../models/buildings')
const buildingsCtlr={}
buildingsCtlr.list=(req,res)=>{
    Buildings.find()
    .then(building=>res.json(building))
    .catch(err=>res.json(err))
}
buildingsCtlr.create=(req,res)=>{
    const body=req.body
    const buildings=new Buildings(body)
    buildings.save()
    .then(building=>res.json(building))
    .catch(err=>res.json(err))
}
buildingsCtlr.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Buildings.findByIdAndUpdate(id,body)
    .then(building=>res.json(building))
    .catch(err=>res.json(err))
}
buildingsCtlr.findOne=(req,res)=>{
    const id=req.params.id
    Buildings.findById(id)
    .then(building=>res.json(building))
    .catch(err=>res.json(err))
}
buildingsCtlr.remove=(req,res)=>{
    const id=req.params.id
    Buildings.findByIdAndDelete(id)
    .then(building=>res.json(building))
    .catch(err=>res.json(err))
}
module.exports=buildingsCtlr