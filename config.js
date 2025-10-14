const mongoDB = require ("mongoose");
function connectDatabase(params) {
   mongoDB.connect("mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/Registration?retryWrites=true&w=majority")
   .then(() => console.log("MongoDB connected"))
   .catch(error => console.log("Connection Failed", error));
 
}
module.exports = connectDatabase;