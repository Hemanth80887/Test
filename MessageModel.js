const  mongoDB = require('mongoose');

const messageSchema = new mongoDB.Schema({
    username:{
        type:String,
        required:true,
        default:"Unkown"
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


const messageDatabase = mongoDB.model("messages", messageSchema);
module.exports = messageDatabase;