// Syntaxe
// --
// const moduleName = require('module-name');


// Node importe les librairies livrées avec Node
const fs = require('fs');

// Node importe les librairies des repertoires node_module
const express = require('express');

// Node importe les fichier (chemins relatifs ou absolus)
const math = require('./utils/math');


const env = "prod";
const myEnv = env == "dev" 
    ? require('./environments/dev.json') 
    : require('./environments/prod.json')

console.log(myEnv.endpoint);
