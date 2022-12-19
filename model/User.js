const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: { type: String, required: true },
    email: { type: String, required: true },
    criacao: { type: Date, default: Date.now },
    descricao: { type: String, required: true },
    senha: { type: String, required: true },
    topicos: []
});

module.exports = mongoose.model("usuario", userSchema);
