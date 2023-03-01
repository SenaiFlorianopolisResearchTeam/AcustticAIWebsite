import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

dotenv.config()

const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).json({msg: "Bem vindo a api, veja a documentação de como usar ela no github"})
})

app.post("/auth/register", async (req,res) => {
    
    const {name, email, password, confirmpassword} = req.body

    if(!name || !email || !password || !confirmpassword) {
        return res.status(422).json({msg: "dados enviados incorretamente"})
    } else {
        return res.status(200).json({msg: "sucesso"})
    }

})

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPass}@acustticai.jegjvzd.mongodb.net/?retryWrites=true&w=majority`,)
    .then(() => {
        app.listen(3000)
        console.log("Conectou ao banco")
}).catch((error)=> console.log(error))