const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname);
const PORT = 8765;

const MIME = {
    '.html': 'text/html',
    '.css':  'text/css',
    '.js':   'application/javascript',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.webp': 'image/webp',
    '.svg':  'image/svg+xml',
};

http.createServer((req, res) => {
    // Extrai apenas o caminho, ignorando query strings (ex: ?id=123)
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    let pathname = parsedUrl.pathname;
    
    if (pathname === '/') {
        pathname = '/index.html';
    }

    let filePath = path.join(ROOT, pathname);
    let ext = path.extname(filePath);

    // Se a requisição não tem extensão (ex: /playstation), tenta adicionar .html
    if (!ext) {
        filePath += '.html';
        ext = '.html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found');
            return;
        }
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
    });
}).listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
});
