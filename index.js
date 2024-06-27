const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola desde mi sitio web con Node.js!');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

