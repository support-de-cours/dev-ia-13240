// console.log( process );



// Liste des arguments de la commande: node process.js --option=value
// Retourne un tableau de 3 entrées
// --
// console.log(process.argv);


// Liste des parametre de l'environnement d'execution
// --
// console.log(process.env);


// Sortie de script
// --
// process.exit(1);


// Memory usage
// --
// console.log(process.memoryUsage());


// Evenement
// --
process.on('exit', (code) => {
    console.log(`Le processus se termine avec le code : ${code}`);
});


