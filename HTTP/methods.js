const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {

	if (req.method === 'GET') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('GET request received\n');
	} 
    
    else if (req.method === 'POST') {

        let body = '';

        req.on('data', chunk => {           
            body += chunk;
        });
        
        req.on('end', () => {

            body = JSON.parse(body);
            console.log(body);
            console.log(`User name: ${body.firstname} ${body.lastname}`);
        
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`POST request received.\n`);
        });

	} 
    
    else {
		res.statusCode = 405;
		res.end('Method not allowed\n');
	}

});

server.listen(3000, () => {
    console.log('Serveur démarré sur  http://localhost:3000');
});