"use strict";

// Import de librairie
// --

const express = require('express');
const path = require('path');
const ejs = require('ejs');



// Configuration de l'application
// --

const app = express();
const PORT = process.env.PORT || 3000;


// Définir l'emplacement des vues
app.set('views', path.join(__dirname, "templates"));


// Définir le moteur HTML
// app.set('view engine', "ejs");
app.set('view engine', "html");
app.engine('html', ejs.__express);


// Ouvrir les accès publics (pour les assets)
app.use( express.static( path.join(__dirname, "public") ) );
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));


// Utiliser les routes
// --

app.use('/', require('./routes/routes'));



// Démarrer le serveur
// --

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur  http://localhost:${PORT}`);
});
