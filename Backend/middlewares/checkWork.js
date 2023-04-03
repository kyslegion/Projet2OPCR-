
module.exports = (req, res, next) => {
	try {
	  // Récupération de l'hôte à partir de l'en-tête de la requête.
	  const host = req.get('host');
	  // Récupération du titre de l'oeuvre de la requête et suppression des espaces inutiles.
	  const title = req.body.title.trim() ?? undefined;
	  // Récupération de l'ID de catégorie de l'oeuvre de la requête et conversion en nombre entier.
	  const categoryId = parseInt(req.body.category) ?? undefined;
	  // Récupération de l'ID d'utilisateur à partir de `req.auth` et conversion en nombre entier.
	  const userId = req.auth.userId ?? undefined;
	  // Construction de l'URL de l'image à partir du nom de fichier téléchargé.
	  const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}` ?? undefined;
  
	  // Vérification de la présence de tous les champs requis dans la requête.
	  if (
		title !== undefined &&
		title.length > 0 &&
		categoryId !== undefined &&
		categoryId > 0 &&
		userId !== undefined &&
		userId > 0 &&
		imageUrl !== undefined
	  ) {
		console.log('Tous les champs requis sont présents.');
	  } else {
		console.log('Certains champs requis sont manquants.');
	  }
  
	  // Si tous les champs requis sont présents, stockage des champs dans `req.work` et appel de la fonction `next`.
	  if (
		title !== undefined &&
		title.length > 0 &&
		categoryId !== undefined &&
		categoryId > 0 &&
		userId !== undefined &&
		userId > 0 &&
		imageUrl !== undefined
	  ) {
		req.work = { title, categoryId, userId, imageUrl };
		next();
	  } else {
		// Si des champs requis sont manquants, retourner une erreur 400 (Requête incorrecte).
		return res.status(400).json({ error: new Error('Requête incorrecte') });
	  }
	} catch (error) {
	  // Si une erreur se produit, retourner une erreur 500 (Erreur interne du serveur).
	  console.error(error);
	  const errorMessage = `Error in check work middleware: ${error.message}`;
	  return res.status(500).json({ error: errorMessage });
	}
  };
  