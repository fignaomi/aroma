const dbConnection = require('../../config/dbServer');
const { getListaAjuda } = require('../models/lista-ajuda');

module.exports.AjudaListar = function (app, req, res) {
    let connection = dbConnection();
    getListaAjuda(connection, function (error, result) {
        if (error) { 
            res.send("Problemas com a conexão!!!");
            console.log(error);
        } else {
            res.send({ detalhes: result });
        }
    });
}
