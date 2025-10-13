var mongoDB=require("mongoose");
var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var cors=require("cors");

mongoDB.connect("mongodb+srv://bhaskarAntoty123:bhaskar3958@bhaskarantony.wagpkay.mongodb.net/harsha-lucky-tours?retryWrites=true&w=majority").then(()=>{
    console.log("connected to mongodb");
}).catch((error)=>{
    
    console.log(error);
})

app.use(cors())
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    res.json({
        message: "Welcome to Hospital!!!"
    })
})

app.get("/directors", (req, res) => {
    res.json({
        directors: [
            { name: "Arun", Age: 30, Shares: "51%" },
            { name: "Prasad", Age: 45, Shares: "20%" },
            { name: "Akhin", Age: 20, Shares: "15%" },
            { name: "Amit", Age: 40, Shares: "10%" }
        ]
    });
});

app.get("/doctors", (req, res) => {
    res.json({
        doctors: [
            { name: "Dr. Ramesh", age: 45, specialization: "Cardiologist" },
            { name: "Dr. Priya", age: 38, specialization: "Dermatologist" },
            { name: "Dr. Karthik", age: 32, specialization: "Neurologist" },
            { name: "Dr. Sneha", age: 40, specialization: "Pediatrician" },
            { name: "Dr. Arjun", age: 36, specialization: "Orthopedic Surgeon" },
            { name: "Dr. Meera", age: 29, specialization: "ENT Specialist" },
            { name: "Dr. Rajesh", age: 50, specialization: "General Physician" },
            { name: "Dr. Ananya", age: 35, specialization: "Gynecologist" },
            { name: "Dr. Vikram", age: 42, specialization: "Ophthalmologist" },
            { name: "Dr. Divya", age: 31, specialization: "Psychiatrist" }
        ]
    });
});


app.get("/Patient", (req, res) => {
    res.json({
        Patient: [
            { name: "Adarsh", age: 25, cured: "Fever" },
            { name: "Karthik", age: 22, cured: "Cold" },
            { name: "Sneha", age: 29, cured: "Asthma" },
            { name: "Rahul", age: 31, cured: "Diabetes" },
            { name: "Ananya", age: 27, cured: "Migraine" },
            { name: "Vikram", age: 34, cured: "Fracture" },
            { name: "Divya", age: 24, cured: "Allergy" },
            { name: "Arjun", age: 28, cured: "Thyroid" },
            { name: "Priya", age: 26, cured: "Hypertension" },
            { name: "Rohit", age: 30, cured: "Arthritis" }
        ]
    });
});

app.listen(5000,()=>{
    console.log("server running");
})
