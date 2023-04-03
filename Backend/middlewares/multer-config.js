const multer = require('multer');

// Tableau des types MIME pris en charge pour l'upload des images.
const MIME_TYPE = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};
// Configuration du stockage des images.
const storage = multer.diskStorage({
  // Destination du fichier téléchargé.
  destination: function (req, file, callback) {
    callback(null, './images');
  },
  // Nom du fichier téléchargé.
  filename: (req, file, callback) => {
    // Remplacement des espaces dans le nom de fichier par des underscores.
    const filename = file.originalname.split(' ').join('_');
    // Suppression de l'extension du nom de fichier.
    const filenameArray = filename.split('.');
    filenameArray.pop();
    const filenameWithoutExtention = filenameArray.join('.');
    // Récupération de l'extension à partir du type MIME.
    const extension = MIME_TYPE[file.mimetype];
    // Concaténation du nom de fichier, de la date et de l'extension.
    callback(null, filenameWithoutExtention + Date.now() + '.' + extension);
  },
});

// Configuration de l'objet `upload` pour traiter les fichiers image.
const upload = multer({ storage }).single('image');

// Exportation d'une fonction middleware qui utilise l'objet `upload` pour télécharger un fichier image.
module.exports = (req, res, next) => {
  upload(req, res, (err) => {
    // Gestion des erreurs de téléchargement.
    if (err instanceof multer.MulterError) {
      console.log('Une erreur Multer s\'est produite lors du téléchargement : ', err);
      return res.status(400).json({ message: 'Requête incorrecte' });
    } else if (err) {
      console.log('Une erreur s\'est produite lors du téléchargement : ', err);
      return res.status(500).json({ message: 'Erreur interne du serveur dans multer-config' });
    }
    // Ajout de `req.file` à l'objet de requête pour permettre l'accès au fichier téléchargé dans le middleware suivant.
    req.file = req.file;
    next();
  });
 
};
