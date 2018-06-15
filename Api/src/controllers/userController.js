let userService = require('../services/userService');
let Joi = require('joi');

module.exports = {
    create: {
        tags: ['api'],
        validate: { 
            params: Joi.object({
                firstname: Joi.string().max(20).required(),
                lastname: Joi.string().max(20).required(),
                username: Joi.string().max(20).required(),
                password: Joi.string().min(6).required()
            })
        },
        handler: (request, response) => {
            let params = {
                firstname: request.payload.firstname,
                lastname: request.payload.lastname,
                username: request.payload.username,
                password: request.payload.password
            };

            // Service will use Promise or async/await
            let user = userService.createUser(params);

            // TODO: add a separate function to get userdata response of createUser will have an ID.
            response(user);
        }
    },
    update: {
        tags: ['api'],
        validate: { },
        handler: (request, response) => {
            response('Update Endpoint');
        }
    },
    get: {
        tags: ['api'],
        validate: { },
        handler: (request, response) => {
            response('Get Endpoint');
        }
    },
    getById: {
        tags: ['api'],
        validate: { },
        handler: (request, response) => {
            // To get params: request.params['id']
            response('Get by Id Endpoint');
        }
    }
};
