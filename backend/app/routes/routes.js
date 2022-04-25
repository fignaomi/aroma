const { oleosListar } = require('../controllers/oleos-essencial');

module.exports = {
    oleosEssenciais: function (app) {
        app.get('/', function (req, res) {
           oleosListar(app, req, res);
        });
    }

};
