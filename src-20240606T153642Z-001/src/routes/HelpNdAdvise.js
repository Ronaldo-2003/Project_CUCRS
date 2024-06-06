const express=require('express')
const home_routes=express.Router()

home_routes.get('/HelpNdAdvise',(req,res)=>{
    res.render('HelpNdAdvise')
})

module.exports=home_routes
