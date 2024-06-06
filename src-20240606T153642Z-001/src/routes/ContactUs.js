const express=require('express')
const home_routes=express.Router()

home_routes.get('/ContactUs',(req,res)=>{
    res.render('ContactUs')
})

module.exports=home_routes
