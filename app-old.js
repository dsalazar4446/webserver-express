const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Conten-type': 'application/json' });
        let salida = {
            nombre: 'Daniel',
            edad: 30,
            url: req.url
        }
        res.write(JSON.stringify(salida))
            // res.write('hola mundo')
        res.end()
    })
    .listen(8080);

console.log('Escucahndo el puerto 8080');