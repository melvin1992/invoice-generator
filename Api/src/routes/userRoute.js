const UserController = require('../controllers/userController');

exports.routes = [
    { method: 'GET', path: '/users', config: UserController.get },
    { method: 'GET', path: '/users/{id}', config: UserController.getById },
    { method: 'POST', path: '/users', config: UserController.create },
    { method: 'PUT', path: '/users/{id}', config: UserController.update }
];  
