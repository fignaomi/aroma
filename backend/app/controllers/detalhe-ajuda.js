const dbConnection = require('../../config/dbServer');
const { getDetalhes} = require('../models/detalhe-ajuda');

module.exports.AjudaDetalhes = function (app, req, res, id) {
    let connection = dbConnection();
    getDetalhes(connection, function (error, result) {
        if (error) { 
            res.send("Problemas com a conexão!!!");
            console.log(error);
        } else {
            console.log(result);
            res.send({ detalhes: result });
        }
    },id);
}
