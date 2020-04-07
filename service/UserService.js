//const User = require("../model/User");

module.exports = {
    create: (req, res) => {
        // let user = new User({
        //     nome: req.body.nome,
        //     sobrenome: req.body.sobrenome,
        //     email: req.body.email,
        //     senha: req.body.senha,
        //     idade: req.body.idade
        // })

        // user.save()
        //     .then(resultado => { 
        //         res.json({ sucesso: true, resultado: resultado })
        //      })
        //     .catch(err => {
        //         res.json({ sucesso: false, resultado: err })
        //     })

        console.log("Olá mundo!");
    },
    update: (req, res) => {
        User.update({ _id: req.body._id }, req.body)
            .then(user => {
                if (!user) res.json({ sucesso: false, resultado: "O usuário não pode ser encontrado" })
                res.json(user)
            })
    },
    getAll: (req, res) => {
        User.find()
            .then(resultado => {
                if (!resultado) res.json({ sucesso: false, resultado: "Não há dados a serem mostrados" })

                res.json({ sucesso: true, resultado: resultado })
            })
            .catch(err => {
                res.json({ sucesso: false, resultado: err })
            })
    },
    getById: (req, res) => {
        User.find({ _id: req.params._id })
            .then(resultado => {
                if (!resultado) res.json({ sucesso: false, resultado: "Não há dados a serem deletados" })

                res.json({ sucesso: true, resultado: resultado })
            })
            .catch(err => res.json({ sucesso: false, resultado: err }))
    },
    removeAll: (req, res) => {
        User.remove()
            .then(resultado => {
                if (!resultado) res.json({ sucesso: false, resultado: "Não há dados a serem deletados" })

                res.json({ sucesso: true, resultado: resultado })
            })
            .catch(err => {
                res.json({ sucesso: false, resultado: err })
            })
    },
    removeById: (req, res) => {
        User.remove({ _id: req.params._id })
            .then(resultado => {
                if (!resultado) res.json({ sucesso: false, resultado: "Não há dados a serem deletados" })

                res.json({ sucesso: true, resultado: resultado })
            })
            .catch(err => res.json({ sucesso: false, resultado: err }))
    }
};