const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/company')
.then(()=>{
    console.log('db connected...');
})
.catch(()=>{
    console.log('error');
})

const recruiter_login=new mongoose.Schema({
    password:{
        type:String,
        // required:true
    },
    company_name:{
        type:String,
        // required:true
    },
    owner_name:{
        type:String,
        // required:true
    },
    address:{
        type:String,
        // required:true
    },
    city:{
        type:String,
        // required:true
    },
    zipcode:{
        type:Number,
        // required:true
    },
    state:{
        type:String,
        // required:true
    },
    country:{
        type:String,
        // required:true
    },
    phone:{
        type:Number,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    nomial_capital:{
        type:Number,
        // required:true
    },    
    industry:{
        type:String,
        // required:true
    },
    company_des:{
        type:String,
        // required:true
    },
    website:{
        type:String,
        // required:true
    }
})

const collection=new mongoose.model('recruiter_login',recruiter_login)

module.exports=collection

