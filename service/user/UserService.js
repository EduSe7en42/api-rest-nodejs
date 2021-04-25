const User = require("../../model/User");

module.exports = class UserService {
    constructor(_req, _res) {
        this.req = _req;
        this.res = _res;
    }

    create() {
        var userModel = {
            nome: this.req.body.nome,
            sobrenome: this.req.body.sobrenome,
            apelido: this.req.body.apelido,
            empresa: this.req.body.empresa,
            cargo: this.req.body.cargo,
            email: this.req.body.email,
            descricao: this.req.body.descricao,
            senha: this.req.body.senha,
            dataAniversario: this.req.body.dataAniversario,
            seguindo: [],
            idade: this.req.body.idade
        };

        var user = new User(userModel);

        user.save()
            .then(resultado => { this.res.json({ sucesso: true, resultado: resultado }); })
            .catch(err => { this.res.json({ sucesso: false, resultado: err }); });
    }

    update() {
        var id = this.req.params.id;
        var new_body = this.req.body;

        User.findByIdAndUpdate(id, new_body)
            .then(resultado => {
                if (!resultado) 
                    this.res.json({ sucesso: false, resultado: "Não há dados a serem mostrados" });
                
                this.res.json({ sucesso: true, resultado: resultado });
            })
            .catch(err => { this.res.json({ sucesso: false, resultado: err }); });        
    }

    getAll() {
        User.find()
            .then(resultado => {
                if (!resultado)
                    this.res.json({ sucesso: false, resultado: "Não há dados a serem mostrados" });
                
                this.res.json({ sucesso: true, resultado: resultado });
            })
            .catch(err => { this.res.json({ sucesso: false, resultado: err }); });
    }

    getById() {
        var id = this.req.params.id;

        User.findById({ _id: id })
            .then(resultado => { 
                if (!resultado) 
                    this.res.json({ sucesso: false, resultado: "Não há dados a serem deletados" });

                this.res.json({ sucesso: true, resultado: resultado });
             })
             .catch(err => this.res.json({ sucesso: false, resultado: err }));
    }

    removeAll() {
        User.remove()
            .then(resultado => {
                if (!resultado) 
                    this.res.json({ sucesso: false, resultado: "Não há dados a serem deletados" });

                this.res.json({ sucesso: true, resultado: resultado });
            })
            .catch(err => this.res.json({ sucesso: false, resultado: err }));
    }

    removeById() {
        var id = this.req.params._id;

        User.remove({ id })
            .then(resultado => {
                if (!resultado) 
                    this.res.json({ sucesso: false, resultado: "Não há dados a serem deletados" });

                this.res.json({ sucesso: true, resultado: resultado });
            })
            .catch(err => this.res.json({ sucesso: false, resultado: err }));
    }
}
