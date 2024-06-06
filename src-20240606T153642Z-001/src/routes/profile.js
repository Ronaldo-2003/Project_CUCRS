const express=require('express')
const profile_routes=express.Router()

profile_routes.get('/profile',(req,res)=>{
    res.render('profile')
})

module.exports=profile_routes
