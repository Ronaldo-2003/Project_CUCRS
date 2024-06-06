const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/company')
.then(()=>{
    console.log('db connected...');
})
.catch(()=>{
    console.log('error');
})

const student_login=new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    dob:{
        type:Date,
        // required:true
    },
    cgpa:{
        type:Number,
        // required:true
    },
    curr_sem:{
        type:Number,
        // required:true
    },
    father_name:{
        type:String,
        
    },
    poy:{
        type:Number,
        // required:true
    },
    address:{
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
    back:{
        type:Number,
        // required:true
    },    
    apply_for:{
        type:String,
        // required:true
    },
    cv:{
        type:String,
        // required:true
    },
    uid:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        // required:true
    }
})

const collection=new mongoose.model('student_login',student_login)

module.exports=collection

