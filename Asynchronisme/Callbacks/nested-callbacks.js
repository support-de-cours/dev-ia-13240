const fs = require('fs');

fs.readFile('example1.txt', 'utf8', (err, data1) => {

    if (err) {
        console.error('Erreur lors de la lecture du premier fichier :', err);
        return;
    }

    fs.readFile('example2.txt', 'utf8', (err, data2) => {
        if (err) {
            console.error('Erreur lors de la lecture du second fichier :', err);
            return;
        }

        console.log('Contenu des deux fichiers :', data1, data2);

    });

});