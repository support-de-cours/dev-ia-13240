// console.log("Ceci est un message général.");
// console.error("Ceci est une erreur.");

// console.time("Processus");
// // Exécuter une tâche
// console.timeEnd("Processus");  // Affiche le temps d'exécution




const util = require('util');

const obj = { name: "John", age: 30 };
console.log(util.inspect(obj));  // Inspection détaillée de l'objet

// const setTimeoutPromise = util.promisify(setTimeout);
// setTimeoutPromise(1000).then(() => console.log("1 seconde écoulée."));
