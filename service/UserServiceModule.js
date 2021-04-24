const UserService = require("./user/UserService");

var userService = null;

module.exports = {
    create: (req, res) => { 
        userService = new UserService(req, res);
        userService.create();
    },
    update: (req, res) => {
        userService = new UserService(req, res);
        userService.update();
    },
    getAll: (req, res) => {
        userService = new UserService(req, res);
        userService.getAll();
    },
    getById: (req, res) => {
        userService = new UserService(req, res);
        userService.getById();
    },
    removeAll: (req, res) => {
        userService = new UserService(req, res);
        userService.removeAll();            
    },
    removeById: (req, res) => {
        userService = new UserService(req, res);
        userService.removeById();            
    }
};