const dbConnection = require('../../config/dbServer');
const { getOleo } = require('../models/oleo');

module.exports.oleoDetalhes = function (app, req, res, id) {
    let connection = dbConnection();
    getOleo(connection, function (error, result) {
        if (error) { 
            res.send("Problemas com a conexão!!!");
            console.log(error);
        } else {
            console.log(result);
            res.send({ oleo: result });
        }
    },id);
}
