const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome: { type: String, required: true },
    sobrenome: String,
    apelido: String,
    empresa: String,
    cargo: String,
    email: { type: String, required: true },
    criacao: { type: Date, default: Date.now },
    descricao: { type: String, required: true },
    senha: { type: String, required: true },
    dataAniversario: { type: Date, required: true },
    seguindo: { type: [{}], required: true },
    seguidores: { type: [{}], required: true },
    idade: Number
});

module.exports = mongoose.model("usuario", userSchema);
