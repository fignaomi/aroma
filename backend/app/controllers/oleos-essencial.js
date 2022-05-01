const dbConnection = require('../../config/dbServer');
const { getOleos } = require('../models/oleos-essenciais');

module.exports.oleosListar = function (app, req, res) {
    let connection = dbConnection();
    getOleos(connection, function (error, result) {
        if (error) { 
            res.send("Problemas com a conexão!!!");
            console.log(error);
        } else {
            res.send({ oleos: result });
        }
    });
}
