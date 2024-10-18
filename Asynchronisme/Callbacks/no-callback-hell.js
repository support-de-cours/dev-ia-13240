const { readFile } = require('fs').promises;


// Methode 1
// --

// readFile('exemple1.txt', 'utf8')
//     .then( data1 => {
//         return readFile('exemple2.txt', 'utf8')
//             .then( data2 => {
//                 console.log('Contenu des deux fichiers :', data1, data2);
//             } )
//     } )
//     .catch(err => {
//         console.error('Erreur lors de la lecture d\'un fichier :', err)
//     })




// Methode 2
// --

// Promise.all([
//         readFile('example1.txt', 'utf8'),
//         readFile('example2.txt', 'utf8')
//     ])
//     .then(([data1, data2]) => {
//       console.log('Contenu des deux fichiers :', data1, data2);
//     })
//     .catch(err => {
//       console.error('Erreur lors de la lecture des fichiers :', err);
//     });




// Methode 3
// --

readFile('example1.txt', 'utf8')
    // Reponse de readFile : exemple1.txt           | Reponse de readFile : exemple2.txt 
    .then(data1 =>  readFile('example2.txt', 'utf8').then(data2 => {return { data1, data2 }}))

    // Si exemple1 et exemple2 sont lus, alors reponse finale
    .then(({ data1, data2 }) => console.log('Contenu des deux fichiers :', data1, data2))

    // Si une erreur lors du process
    .catch(err => console.error('Erreur lors de la lecture d\'un fichier :', err));