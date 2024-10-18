const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const PORT = require('./Utils/Port');

// const PORT = process.env.PORT || 3000;

// Utilises le port 3000 pour le dev.
// Utilises un port aleatoire en Prod. 
// const PORT = portUtil;


app.set('views', path.join(__dirname, "templates"));
app.set('view engine', "html");
app.engine('html', ejs.__express);

app.use( express.static( path.join(__dirname, "public") ) );
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use('/', require('./config/routes'));

exports.port = PORT;

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur  http://localhost:${PORT}`);
});