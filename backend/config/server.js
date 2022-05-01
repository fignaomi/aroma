let express = require('express');
const cors = require('cors')

const app = express();

// Config JSON response
app.use(express.json())

const port = process.env.PORT || 5000;

//Salve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Public folder for images
app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views','./app/views');


app.listen(port, function() {
    console.log('Servidor rodando com Express na porta ', port);
});

module.exports = app;