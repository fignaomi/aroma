const app = require('./config/server');

const routes = require('./app/routes/routes');

routes.oleosEssenciais(app);
routes.oleoEssencialDetalhes(app);
routes.detalhesAjuda(app);
routes.detalhesSintomas(app);
