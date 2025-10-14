const mongoDB = require('mongoose');

const userSchema = new mongoDB.Schema({
    username:{
        type:String,
        required:true
    },
      email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
      phonenumber:{
        type:String,
        required:true
    },
      role:{
        type:String,
        required:true,
        enum:["user", "admin"],
        default:"user"
    },
      gender:{
        type:String,
        required:true,
        enum:["male", "female"]
    },
      age:{
        type:Number,
        required:true
    }
})


const userdatabaseFolder = mongoDB.model('users', userSchema);
module.exports = userdatabaseFolder;