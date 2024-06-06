const express=require('express')
const home_routes=express.Router()

home_routes.get('/home_page',(req,res)=>{
    res.render('home_page')
})

module.exports=home_routes
