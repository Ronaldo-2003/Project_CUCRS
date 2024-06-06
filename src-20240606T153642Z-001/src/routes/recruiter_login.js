const express=require('express')
const recruiter_login_routes=express.Router()

recruiter_login_routes.get('/recruiter_login',(req,res)=>{
    res.render('recruiter_login')
})

module.exports=recruiter_login_routes
