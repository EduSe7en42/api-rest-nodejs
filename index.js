const express = require("express");
const mongoose = require("mongoose");
const rotas = require("./routes");

const app = express();

// Database 
mongoose.connect("mongodb://127.0.0.1/api-node-db", { useNewUrlParser: true })
    .then(() => console.log("Conectado com sucesso!"))
    .catch((err) => console.error(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// User Controller
const userController = require("./controller/UserController"); 

// User Routes
app.use(rotas);

//Start server
let porta = 8080;
app.listen(porta, () => { console.log("Serviço iniciado na porta: " + porta) })
