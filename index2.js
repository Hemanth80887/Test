var mongoDB = require('mongoose');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
var app = express();
//if u are not getting to screate the project 1npm-scripts disabled in this system
//Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

mongoDB.connect("mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/simple-backend?retryWrites=true&w=majority")
.then(function(){
    console.log("MongoDB is connected");  
})
.catch(function(err){
    console.log(err); 
})

app.use(cors())
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.json({
        message:"Welcome to user management system backend.. ✅"
    })
})



//informing mongoose to store data

const testusersSchema = new mongoDB.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:['user', 'admin'],
        default:'user'
    }
})

const testUsersFolder = mongoDB.model("testusers", testusersSchema );

app.get('/users/list',async(req, res)=>{
    try {
        const allusers = await testUsersFolder.find();
        if(allusers==false){
            res.status(404).json({
                message:"users not found"
            })
            return;
        }


        res.status(200).json({
            message:"users fetched successfully...",
            users:allusers
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
});

app.post('/create/new/user', async (req, res)=>{
   try {
    //  const data = {
    //     username:"kumar",
    //     email:'kumar@gmail.com',
    //     age:10,
    //     role:'admin',
    //     phonenumber:'9487647646'
    // }
    const newuser = new testUsersFolder(req.body)
    await newuser.save();

    res.json({
        createdUser:newuser,
        message:'user created successfully'
    })
   } catch (error) {
        res.json({
            message:error.message,
            fullerror:error
        })
   }
})

// app.post('/send/:username/hello/:email', async(req, res) => {
//     // console.log(req.params.username);
//     // console.log(req.params.email);
//     //destructire the object
//     const {username, email} = req.params;
    
//     res.json({
//         message:"/send API working fine..",
//         username:username,
//         emailAddress:email
//     })
// })

app.post('/data', async(req, res) => {
   console.log(req.body);
   
    
    res.json({
        message:"/send API working fine..",
        bodyData:req.body
    })
})

app.get('/single/user/:id', async(req, res)=>{
    console.log(req.params.id);
    const {id} = req.params;
    try {
        // const user = await testUsersFolder.findOne({username:req.params.id});
        const user = await testUsersFolder.findById(id);
        // if(user !=true){

        // }

        if(!user){
                res.status(404).json({
                    success:false,
                    message:"user not found in this id"
                });
                return;
        }

        res.status(200).json({
            success:true,
            message:"user fetched successfully",
            userData:user
        })


    } catch (error) {
          res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
})

app.delete('/delete/user/:id', async(req, res)=>{
    const {id} = req.params;
    try {
        const user = await testUsersFolder.findById(id);
        if(!user){
                res.status(404).json({
                    success:false,
                    message:"user not found in this id"
                });
                return;
        }

        const dltuser = await testUsersFolder.findByIdAndDelete(id)

        res.status(200).json({
            success:true,
            message:"user deleted successfully",
            deletedData:dltuser
        })


    } catch (error) {
          res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
})

app.listen(5000, ()=>{
    console.log("Server is running in http://localhost:5000");
})