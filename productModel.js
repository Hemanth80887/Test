const mongoDB = require('mongoose');

//schema
const productSchema = new mongoDB.Schema({
    productname:{
        type:String,
        required:true
    },
    mainImage:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
     price:{
        type:Number,
        required:true
    },
     description:{
        type:String,
        required:true
    },
     discount:{
        type:Number,
        required:true,
        default:0
    }
})






const productDatabaseFolder = mongoDB.model("productsdata", productSchema);
module.exports = productDatabaseFolder;