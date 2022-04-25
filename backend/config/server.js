let express = require('express');
let app = express();
let port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views','./app/views');
//consign().include('./app/routes').into(app);

app.listen(port, function() {
    console.log('Servidor rodando com Express na porta ', port);
});

module.exports = app;