const net = require('net');

// module.exports = () => {
//     // Creation d'un serveur avec le module "net"
//     const server = net.createServer();

//     // Démarrage du serveur sur le port 0
//     // Le port 0 n'existant pas, le module "net" va rechercher un port disponible
//     server.listen(0);

//     // Recupération du numéro de port attribué par le module "net"
//     const port = server.address().port;
    
//     // Fermeture du serveur
//     server.close();

//     // Retourne le numéro de Port
//     return port;
// }


function randomPort() {
    const server = net.createServer();
    server.listen(0);
    const port = server.address().port;
    server.close();
    return port;
}
module.exports = randomPort();