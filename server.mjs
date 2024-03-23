import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const imagePath = path.join(__dirname, 'images');

// Rota para servir a imagem
app.get('/image', (req, res) => {
    // Nome do arquivo da imagem que você quer servir
    let imageName = 'img.png';
    if(!req.headers.referer || !req.headers.accept.startsWith("image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;")){
        imageName = 'blocked-website.jpg'
    }
    // Caminho completo para a imagem
    const imagePathname = path.join(imagePath, imageName);
    // Envia a imagem como resposta
    res.sendFile(imagePathname);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
