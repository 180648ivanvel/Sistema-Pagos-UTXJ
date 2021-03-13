const mogoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
    login: function (query, cb) {
        this.find(query, cb);
    }
}

const authModel = mogoose.model('Usuarios', authSchema); //Va el nombre de la coleccion 
module.exports = authModel;