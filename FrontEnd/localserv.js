const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use('/event', express.static(path.join(__dirname, 'FrontEnd', 'event')));

app.use(express.static(path.join(__dirname, 'assets')));

app.use('/fetch', express.static(path.join(__dirname, 'fetch')));
app.use('/modify', express.static(path.join(__dirname, 'FrontEnd', 'script', 'event', 'connected')));

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/script', express.static(path.join(__dirname, 'script')));

app.use('/icons', express.static(path.join(__dirname, 'icons')));

app.use('/assets/icons', express.static(path.join(__dirname, 'FrontEnd', 'assets', 'icons')));




app.use('/style', express.static(path.join(__dirname, 'style')));

app.use('/filter', express.static(path.join(__dirname, 'filter')));

app.use('/delete', express.static(path.join(__dirname, 'FrontEnd', 'delete')));


app.use('/get', express.static(path.join(__dirname, 'FrontEnd', 'get')));


app.use('/post', express.static(path.join(__dirname, 'FrontEnd', 'post')));


app.use('/fetchGet.js', express.static(path.join(__dirname, 'FrontEnd', 'fetch', 'fetchGet.js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}.`);
});
