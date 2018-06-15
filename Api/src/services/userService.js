/*
User service
*/
let UserModel = require('../models/users');

module.exports = {
    createUser: (userCmd) => {
        let user = new UserModel();

        user.firstname = userCmd.firstname;
        user.lastname = userCmd.lastname;
        user.username = userCmd.username;
        user.password = userCmd.password;
  
        // TODO: save data to database
        return user.getUserInfo();
    }
};
