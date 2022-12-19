const express = require("express");
const mongoose = require("mongoose");
const rotas = require("./routes");

const app = express();

const mongoUrl = "mongodb://u5tg3mzx5hrihlkpn1th:c9Q4v6NPMMGgMPXPuiyn@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bx0gm0orqeyqg2m?replicaSet=rs0"

// Database 
mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => console.log("Conectado com sucesso!"))
    .catch((err) => console.error(err));
mongoose.set("useFindAndModify", false);

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
