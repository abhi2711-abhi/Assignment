const express = require('express')
const path = require("path")

const app = express()

require("./db/conn")

const Role = require("./models/registers")
const Usercreate = require("./models/usercreate")
const Student = require("./models/student")
const School = require("./models/school")
const { error } = require('console')

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set("view engine", "hbs")

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/role', (req, res) => {
    res.render("role")
})

app.get('/user', (req, res) => {
    res.render("user")
})

app.get('/usercreate', (req, res) => {
    res.render("usercreate")
})

app.get('/userlogin', (req, res) => {
    res.render("userlogin")
})

app.get('/student', (req, res) => {
    res.render("student")
})

app.get('/school', (req, res) => {
    res.render("school")
})

app.post("/role", async(req,res) =>{
    
    const roleEmployee = new Role ({
            // roleid:req.body.roleid,
            name: req.body.name,
            scope:req.body.scope,
    })       
    console.log(roleEmployee)
    const roled = await roleEmployee.save()
    res.status(201).send(roleEmployee)
})

app.post("/usercreate", async(req,res) =>{
    try{
        const usercreateEmployee = new Usercreate ({
            userid:req.body.userid,
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            // roleid:req.body.roleid,
        })       
        console.log(usercreateEmployee)
        const usered = await usercreateEmployee.save()
        res.status(201).send(usercreateEmployee)
    }catch(err){
        res.status(404).send(err)
        console.log("data can't store")
    }
})

app.post("/userlogin", async(req, res) =>{
    try {
         
             const email = req.body.email;
             const password = req.body.password;
     
             const useremail = await Usercreate.findOne({email:email});
            
             if(useremail.password === password){
                res.send(useremail)
                console.log(useremail);
             }else{
                res.send("invalid Password Details"); 
             }
         
        } catch (error) {
            res.status(400).send("invalid login Details")
        }
})

app.post("/student", async(req,res) =>{
    
    const studentEmployee = new Student ({
            name: req.body.name,
            userid:req.body.userid,
            schoolid:req.body.schoolid,
    })       
    console.log(studentEmployee)
    const studented = await studentEmployee.save()
    res.status(201).send(studentEmployee)
})

app.post("/school", async(req,res) =>{
    
    const schoolEmployee = new School ({
            schoolid:req.body.schoolid,
            name: req.body.name,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country
    })       
    console.log(schoolEmployee)
    const schooled = await schoolEmployee.save()
    res.status(201).send(schoolEmployee)
})

app.listen(3000, () => {
    console.log(' servier working')
})