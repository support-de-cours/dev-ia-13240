const { exec } = require('child_process');

// my-reporter.js
class MyReporter {
    constructor(runner) {
        let total = 0;
        let passes = 0;
        let failures = 0;

        runner.on('pass', function (test) {
            passes += 1;
            total++;
        });

        runner.on('fail', function (test, err) {
            failures += 1;
            total++;
        });

        runner.on('end', function () {
            console.log('Total : ' + total);
            console.log('Total passes: ' + passes);
            console.log('Total failures: ' + failures);

            if (passes === total) {
                exec('node ./index.js', (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error executing index.js: ${error.message}`);
                        process.exit(1); // En cas d'erreur, quitter avec une erreur
                        return;
                    }
                    if (stderr) {
                        console.error(`Error output: ${stderr}`);
                        process.exit(1); // En cas de message d'erreur dans stderr, quitter avec une erreur
                        return;
                    }
                    console.log(`Output: ${stdout}`);
                    
                    // Si tout va bien, vérifier les résultats des tests avant de quitter
                    if (failures === 0) {
                        process.exit(0); // Retourne true si tous les tests passent
                    } else {
                        process.exit(1); // Retourne false si des tests échouent
                    }
                });
            }
            else {
                console.log('OOOPPPSSS...');
            }

        });
    }
}

module.exports = MyReporter;
