import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const app = express()

app.get("/", (req,res) => {
    res.status(200).json({msg: "Bem vindo a api"})
})

app.listen(3000)