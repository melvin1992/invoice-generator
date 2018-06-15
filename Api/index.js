'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const userRoute = require('./src/routes/userRoute');

server.connection({ 
    host: 'localhost', 
    port: 3000
});

server.route(userRoute.routes);

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
});
