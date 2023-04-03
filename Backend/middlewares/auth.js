// Importation du module `jsonwebtoken`.
const jwt = require('jsonwebtoken');

// Définition d'une fonction middleware qui vérifie la validité du token d'authentification.
module.exports = (req, res, next) => {
  // Extraction de l'en-tête d'autorisation de la requête.
  const authHeader = req.headers.authorization;

  // Si l'en-tête d'autorisation est absent, retourner une erreur 401 (Non autorisé).
  if (!authHeader) {
    return res.status(401).json({
      error: new Error('En-tête d\'autorisation manquant')
    });
  }

  // Extraction du token d'authentification à partir de l'en-tête d'autorisation.
  const token = authHeader.split(' ')[1];

  // Si le token est absent, retourner une erreur 401 (Non autorisé).
  if (!token) {
    return res.status(401).json({
      error: new Error('Token d\'authentification manquant')
    });
  }

  try {
    // Vérification de la validité du token à l'aide de la clé secrète `TOKEN_SECRET`.
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    // Extraction de l'ID utilisateur à partir du token décodé.
    const userId = decodedToken.userId;
    // Ajout de l'ID utilisateur à la requête sous la propriété `auth`.
    req.auth = { userId };
    // Affichage d'un message de confirmation d'authentification dans la console.
    console.log("Authentifié !");
    // Appel de la fonction `next` pour passer au middleware suivant.
    next();
  } catch (error) {
    // Si le token n'est pas valide, retourner une erreur 401 (Non autorisé).
    console.error(error);
    return res.status(401).json({
      error: new Error('Token d\'authentification invalide')
    });
  }
};
