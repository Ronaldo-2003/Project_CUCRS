const express=require('express')
const home_routes=express.Router()

home_routes.get('/home',(req,res)=>{
    res.render('home')
})

module.exports=home_routes
