const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome: { type: String, required: true },
    sobrenome: String,
    email: { type: String, required: true },
    criacao: { type: Date, default: Date.now },
    senha: { type: String, required: true },
    idade: Number
});

module.exports = mongoose.model("usuario", userSchema);