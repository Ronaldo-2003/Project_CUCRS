const express=require('express')
const jobs_routes=express.Router()

jobs_routes.get('/jobs',(req,res)=>{
    res.render('jobs')
})

module.exports=jobs_routes
