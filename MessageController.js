const messageDatabase = require("../models/MessageModel")


const CreateMessage = async(req, res)=>{
    try {
        const newMessage = new messageDatabase(req.body);
        await newMessage.save();

        res.status(200).json({
            message:"Message sent successfully.",
            sentMessage:newMessage,
            isSuccess:true
        })
    } catch (error) {
        res.status(500).json({
            message:error.message,
            isSuccess:false
        })
    }
}



const getMessages = async(req, res) =>{
    try {
        const allMessages = await messageDatabase.find();
        if(!allMessages){
            return res.status(404).json({
                isSuccess:false,
                message:"No Messages found"
            })
        }


        res.status(200).json({
            isSuccess:true,
            message:"All messages fetched successfully.",
            messages:allMessages
        })
    } catch (error) {
          res.status(500).json({
            message:error.message,
            isSuccess:false
        })
    }
}


const deleteMessage = async(req, res) =>{
    const {id} = req.params;
    try {
        const message = await messageDatabase.findById(id);

        if(!message){
             return res.status(404).json({
                isSuccess:false,
                message:"No Message found"
            })
        }


        const dltMessage = await messageDatabase.findByIdAndDelete(id);

          res.status(200).json({
            isSuccess:true,
            message:"message deleted successfully.",
            deletedMessage:dltMessage
        })
    } catch (error) {
         res.status(500).json({
            message:error.message,
            isSuccess:false
        })
    }
}

module.exports = {CreateMessage, getMessages, deleteMessage};