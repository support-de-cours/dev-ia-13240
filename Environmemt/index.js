// Lecture du fichier '.env' et injection dans 'process.env'
require('dotenv').config();
// console.log(process.env);


// import de express
// ...


const config = require(`./environments/environment.${process.env.APP_ENV}`)

// Config et Initialisation de express
// ...


// Controller avec requete vers l'API
const url = config.endpoint;
console.log(url);

// fetch(url)...


// Démarrage du serveur Express
// ...