"use strict"


const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({extended:false }))
app.use(bodyParser.json())

app.get("/usuario", (req, res) => {
    res.status(200).send({usuario:[]})
})
app.get("usuario:usuarioId", (req, res) => {
})

app.post("/usuario", (req, res) => {
    console.log(req.body)
    res.status(200).send("Usuario encontrado")
})


app.listen(port, ()=>{
    console.log("API REST corriendo en http://localhost:3000")
})
