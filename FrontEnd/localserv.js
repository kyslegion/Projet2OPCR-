const express = require('express');
const app = express();
const path = require('path');

// Définir le port sur lequel le serveur doit écouter
const PORT = 3000;

// Route pour le dossier "event"
app.use('/event', express.static(path.join(__dirname, 'FrontEnd', 'event')));

// Route pour les fichiers d'assets
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/fetch', express.static(path.join(__dirname, 'fetch')));
// app.use('/fetch/get', express.static(path.join(__dirname, 'get')));
app.use('/modify', express.static(path.join(__dirname, 'FrontEnd', 'script', 'event', 'connected')));

// Route pour le dossier "assets"
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route pour le dossier "script"
app.use('/script', express.static(path.join(__dirname, 'script')));

app.use('/icons', express.static(path.join(__dirname, 'icons')));

app.use('/assets/icons', express.static(path.join(__dirname, 'FrontEnd', 'assets', 'icons')));
// app.use('/assets/icons', express.static(path.join(__dirname, 'FrontEnd', 'assets', 'icons')));



// Route pour le dossier "style"
app.use('/style', express.static(path.join(__dirname, 'style')));

app.use('/filter', express.static(path.join(__dirname, 'filter')));
// Définir une route de base pour servir le fichier HTML

// Route pour le dossier "delete"
app.use('/delete', express.static(path.join(__dirname, 'FrontEnd', 'delete')));

// Route pour le dossier "get"
app.use('/get', express.static(path.join(__dirname, 'FrontEnd', 'get')));

// Route pour le dossier "post"
app.use('/post', express.static(path.join(__dirname, 'FrontEnd', 'post')));

// Route pour le fichier "fetchGet.js"
app.use('/fetchGet.js', express.static(path.join(__dirname, 'FrontEnd', 'fetch', 'fetchGet.js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}.`);
});
