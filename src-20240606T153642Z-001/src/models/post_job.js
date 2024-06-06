const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/company')
.then(()=>{
    console.log('db connected...');
})
.catch(()=>{
    console.log('error');
})

const postJobSchema=new mongoose.Schema({
    job_title:{
        type:String,
        required:true
    },
    job_type:{
        type:String,
        required:true
    },
    job_description:{
        type:String,
        required:true
    },
    minimum_quailification:{
        type:String,
        required:true
    },
    skills_required:{
        type:String,
        required:true
    },
    job_location:{
        type:String,
        required:true
    },
    working_hours:{
        type:Number,
        required:true
    },
    expected_salary:{
        type:Number,
        required:true
    },
    entry_date:{
        type:Date,
        required:true
    },
    last_date_to_apply:{
        type:Date,
        required:true
    }
})

const collection=new mongoose.model('post_job',postJobSchema)

module.exports=collection

