const express=require('express')
const student_login_routes=express.Router()

student_login_routes.get('/student_login',(req,res)=>{
    res.render('student_login')
})

module.exports=student_login_routes
