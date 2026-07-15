const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const userModel = require("./models/users");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://irfanmhdm:irfanmhdm@ac-se39fxg-shard-00-00.1l1lwd0.mongodb.net:27017,ac-se39fxg-shard-00-01.1l1lwd0.mongodb.net:27017,ac-se39fxg-shard-00-02.1l1lwd0.mongodb.net:27017/?ssl=true&replicaSet=atlas-ly15db-shard-0&authSource=admin&appName=Cluster0");

app.post("/signup", async (req, res) => {
    try {
        let input = req.body;

        let hashedPassword = bcrypt.hashSync(input.password, 10);
        input.password = hashedPassword;

        let check = await userModel.findOne({
            email: input.email
        });

        if (check) {
            return res.json({
                status: "Email already exists"
            });
        }

        let result = new userModel(input);
        await result.save();

        res.json({
            status: "User registered successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "Error",
            message: error.message
        });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});