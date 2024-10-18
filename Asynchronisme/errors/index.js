
// Gestion d'erreur avec structure conditionnelle
// --

// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Erreur lors de la lecture du fichier:', err);
//         return;
//     }
//     console.log(data);
// });




// Gestion d'erreur avec methode "catch"
// --

// const fs = require('fs').promises;

// fs.readFile('file.txt', 'utf8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error('Erreur lors de la lecture du fichier:', err);
//     });




// Propagation des erreurs dans les Promises
// --

function readFile() {
    return fs.readFile('file.txt', 'utf8');
}

async function main() {
    try {
        const data = await readFile();
        console.log(data);
    } catch (err) {
        console.error('Erreur dans main:', err);
    }
}

main();
