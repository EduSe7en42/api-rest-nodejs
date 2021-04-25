var express = require("express");
var rota = express.Router();
var userController = require("./controller/UserController");

rota.post("/user/criar", userController.create);
rota.patch("/user/atualizar/:id", userController.update);
rota.get("/user/recuperar", userController.getAll);
rota.get("/user/recuperar/:id", userController.getById);
rota.delete("/user/remover/", userController.removeAll);
rota.delete("/user/remover/:id", userController.removeById);

module.exports = rota;
