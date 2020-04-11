const userService = require("../service/UserService");

module.exports = {
    create: (req, res) => {        
        userService.create(req, res);
    },
    update: (req, res) => {
        userService.update(req, res);
    },
    getAll: (req, res) => {
        userService.getAll(req, res);
    },
    getById: (req, res) => {
        userService.getById(req, res);
    },
    removeAll: (req, res) => {
        userService.removeAll(req, res);
    },
    removeById: (req, res) => {
        userService.removeById(req, res);
    }
};
