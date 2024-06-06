const express=require('express')
const recruiter_login_routes=express.Router()

recruiter_login_routes.get('/recruiter_profile',(req,res)=>{
    res.render('recruiter_profile')
})

module.exports=recruiter_login_routes

