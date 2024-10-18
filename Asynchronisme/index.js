// Lecture d'un fichier de manière asynchrone avec async/await
const fs = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile('monFichier.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Erreur lors de la lecture du fichier', err);
  }
}

readFileAsync();