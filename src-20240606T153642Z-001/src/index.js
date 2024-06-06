 const express=require('express')
 const hbs=require('hbs')
 const mongoose_post_job=require('./models/post_job')
 const mongoose_recruiter_login=require('./models/recruiter_login')
 const mongoose_student_login=require('./models/student_login')
 const bodyParser = require('body-parser')
 const app=express()
 
 //routes
 const home_routes=require('./routes/home')
 const student_login_routes=require('./routes/student_login')
 const recruiter_login_routes=require('./routes/recruiter_login')
 const jobs_routes=require('./routes/jobs')
 const profile_routes=require('./routes/profile')
 const home_page_routes=require('./routes/home_page')
 const ContactUs_routes=require('./routes/ContactUs')
 const HelpNdAdvise_routes=require('./routes/HelpNdAdvise')
 const AboutUs_routes=require('./routes/AboutUs')
 const recruiter_profile_routes=require('./routes/recruiter_profile')

 app.use('/static',express.static('public'))
 app.set('view engine','hbs')
 app.set('views', 'views')
 app.use(express.urlencoded({extended:false}))
 app.use('',home_routes)
 app.use('',student_login_routes)
 app.use('',recruiter_login_routes)
 app.use('',jobs_routes)
 app.use('',profile_routes)
 app.use('',home_page_routes)
 app.use('',ContactUs_routes)
 app.use('',HelpNdAdvise_routes)
 app.use('',AboutUs_routes)
 app.use('',recruiter_profile_routes)


//  mongodb connection for job post
app.post('/post_job',async (req,res)=>{
   const data={
     job_title:req.body.job_title,
     job_type:req.body.job_type,
     job_description:req.body.job_description,
     minimum_quailification:req.body.min_qualification,
     skills_required:req.body.skillsreq,
     job_location:req.body.job_location,
     working_hours:req.body.working_hours,
     expected_salary:req.body.expected_salary,
     entry_date:req.body.entry_date,
     last_date_to_apply:req.body.lastapplydate
   }

   //check for validation
   const check=await mongoose_post_job.findOne({job_title:req.body.job_title})
   if(check){
      if(check.job_title===req.body.job_title && check.job_type===req.body.job_type)
      res.send('<script>alert("Job already posted")</script>')
   }
   
   //insert data
   await mongoose_post_job.insertMany([data])
   res.send('<script>alert("Job posted")</script>')
})

//  mongodb connection for recruiter_login
app.post('/recruiter_login',async (req,res)=>{
   const data={
     password:req.body.password,
     company_name:req.body.company_name,
     owner_name:req.body.owner_name,
     address:req.body.address,
     city:req.body.city,
     zipcode:req.body.zipcode,
     state:req.body.state,
     country:req.body.country,
     phone:req.body.phone,
     email:req.body.email,
     nomial_capital:req.body.capital,
     industry:req.body.industry,
     company_des:req.body.detail,
     website:req.body.website
   }
   //insert data
   await mongoose_recruiter_login.insertMany([data])
   res.render('home')
})

// recruiter authentication
app.post('/recruiter',async (req,res)=>{
   const check=await mongoose_recruiter_login.findOne({email:req.body.email})
   if(check){
      if(check.email===req.body.email && check.password===req.body.password)
      res.render('recruiter_page')
      else
      res.send('<script>alert("Please enter correct email and password ")</script>')
   }
})

//  mongodb connection for student_login
app.post('/student_login',async (req,res)=>{
   const data={
     name:req.body.name,
     dob:req.body.dob,
     cgpa:req.body.cgpa,
     curr_sem:req.body.curr_sem,
     father_name:req.body.father_name,
     poy:req.body.poy,
     address:req.body.address,
     phone:req.body.phone,
     email:req.body.email,
     back:req.body.back,
     apply_for:req.body.apply_for,
     cv:req.body.cv,
     uid:req.body.uid,
     password:req.body.password
   }
   //insert data
   await mongoose_student_login.insertMany([data])
   res.render('home')
})

// student validation
app.post('/student',async (req,res)=>{
   const check=await mongoose_student_login.findOne({uid:req.body.uid})
   if(check){
      if(check.uid===req.body.uid && check.password===req.body.password)
      res.render('Student_Dashboard')
      else
      res.send('<script>alert("Please enter correct uid and password ")</script>')
   }
})




 app.use(bodyParser.urlencoded({extended:true}))
 app.listen(process.env.PORT | 5556,()=>{
    console.log('port is running..')
 })

