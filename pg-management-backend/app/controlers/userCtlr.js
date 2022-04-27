const User=require('../models/user')
const userCtlr={}
userCtlr.list=(req,res)=>{
    User.find()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}
userCtlr.create=(req,res)=>{
    const body=req.body
    const user=new User(body)
    user.save()
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

module.exports=userCtlr