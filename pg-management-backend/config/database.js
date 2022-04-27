const mongoose=require('mongoose')
const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/pg',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('connected DB'))
    .catch((err)=>console.log('Not Connected',err.message))
}
module.exports=configureDB