const express=require('express')
const home_routes=express.Router()

home_routes.get('/AboutUs',(req,res)=>{
    res.render('AboutUs')
})

module.exports=home_routes
