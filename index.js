const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Database
// mongoose.connect("mongodb://127.0.0.1/minhaApiNode", { useNewUrlParser: true })
//     .then(() => console.log("Conectado com sucesso!"))
//     .catch((err) => console.error(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Controller
const userController = require("./controller/UserController"); 

// Routes
app.post("/user/criar", userController.create);
app.post("/user/atualizar", userController.update);
app.get("/user/recuperar", userController.getAll);
app.get("/user/recuperar/:id", userController.getById);
app.delete("/user/remover/", userController.removeAll);
app.delete("/user/remover/:id", userController.removeById);

//Start server
let porta = 8080;
app.listen(porta, () => { console.log("Serviço iniciado na porta: " + porta) })
