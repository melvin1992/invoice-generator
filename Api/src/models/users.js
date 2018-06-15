const uuid = require('node-uuid');

class User {
    constructor () {
        this.id = uuid.v4();
    }

    set firstname (fname) {
        this._firstname = fname;
    }

    get firstname () {
        return this._firstname;
    }

    set lastname (lname) {
        this._lastname = lname;
    }

    get lastname () {
        return this._lastname;
    }

    set username (uname) {
        this._username = uname;
    }

    get username () {
        return this._username;
    }

    set password (pass) {
        this._password = pass; // TODO: Hash password
    }

    get password () {
        return this._password;
    }

    getUserInfo () {
        return {
            id: this.id,
            username: this._username,
            firstname: this._firstname,
            lastname: this._lastname,
        };
    }
}

module.exports = User;
