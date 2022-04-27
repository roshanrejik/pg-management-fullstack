const Ternants=require('../models/ternants')
const ternantsCtlr={}
ternantsCtlr.list=(req,res)=>{
    Ternants.find()
    .then(building=>res.json(building))
    .catch(err=>res.json(err))
}
ternantsCtlr.create=(req,res)=>{
    const body=req.body
    const ternants=new Ternants(body)
    ternants.save()
    .then(room=>res.json(room))
    .catch(err=>res.json(err))
}
ternantsCtlr.remove=(req,res)=>{
    const id=req.params.id
    Ternants.findByIdAndRemove(id)
    .then(room=>res.json(room))
    .catch(err=>res.json(err))
}
ternantsCtlr.findOne=(req,res)=>{
    const id=req.params.id
    Ternants.findById(id)
    .then(ternant=>res.json(ternant))
    .catch(err=>res.json(err))
}

ternantsCtlr.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Ternants.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(ternant=>res.json(ternant))
    .catch(err=>res.json(err))
}

module.exports=ternantsCtlr