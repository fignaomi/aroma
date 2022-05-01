const router = require('express').Router()
const {oleosListar} = require('../controllers/oleos-essencial');
const {oleoDetalhes} = require('../controllers/oleo');
const {AjudaListar} = require('../controllers/lista-ajuda');
const {AjudaDetalhes} = require('../controllers/detalhe-ajuda');

module.exports = {
    oleosEssenciais: function (app) {
        app.get('/', function (req, res) {
           oleosListar(app, req, res);
        });
    },
    oleoEssencialDetalhes: function (app) {
        app.get('/oleo/:id', function (req, res) {
           let id = req.params.id;
            oleoDetalhes(app, req, res,id);
        });
    },
   detalhesAjuda: function (app) {
        app.get('/listaAjuda', function (req, res) {
            AjudaListar(app, req, res);
        });
    },
    detalhesSintomas:function (app) {
    app.get('/detalhesSintomas/:id', function (req, res) {
        let id = req.params.id;
        AjudaDetalhes(app, req, res,id);
     });
 },
};


