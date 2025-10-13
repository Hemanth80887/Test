const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Hemanth:Hemanth@123@hemanth.f7nputx.mongodb.net/?retryWrites=true&w=majority&appName=hemanth")
.then(() => console.log("MongoDB connected"))
.catch(error => console.log("Connection Failed", error));

const regSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    disease: { type: String, required: true }
});

const Registration = mongoose.model("Registration", regSchema);

app.post("/registration", async (req, res) => {
    try {
        const { name, email, phone, age, disease } = req.body;
        const newReg = new Registration({ name, email, phone, age, disease });
        await newReg.save();
        res.json({ message: "User is Registered" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to register" });
    }
});

app.get("/admin", async (req, res) => {
    try {
        const patients = await Registration.find();
        res.json({ patients });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Unable to fetch patient data" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
