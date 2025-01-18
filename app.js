const fs = require('fs');
const http = require('http');

const PORT = process.env.PORT || 80; 
const DOMAIN = 'lightcoral-badger-606203.hostingersite.com'; 

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('index.html', (error, data) => {
        if (!error) {
            res.write(data);
        } else {
            res.write('<h1>Błąd serwera</h1>');
        }
        res.end();
    });
});

server.listen(PORT, () => {
    console.log(`Serwer działa na http://${DOMAIN}:${PORT}`);
});