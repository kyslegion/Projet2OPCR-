// Importation du module `works` du modèle de base de données.
const db = require('./../models');
const Works = db.works

// Exportation d'une fonction pour récupérer toutes les projets.
exports.findAll = async (req, res) =>  {
	// Récupération de toutes les projets et de leur catégorie associée.
	const works = await Works.findAll({include: 'category'});
	// Retour de toutes les projets en tant que réponse.
	return res.status(200).json(works);
}

// Exportation d'une fonction pour créer une oeuvre.
exports.create = async (req, res) => {
	// Récupération de l'hôte à partir de l'en-tête de la requête.
	const host = req.get('host');
	// Récupération du titre, de l'ID de catégorie, de l'ID d'utilisateur et de l'URL de l'image à partir de la requête.
	const title = req.body.title;
	const categoryId = req.body.category;
	const userId = req.auth.userId;
	const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}`;
	try{
		// Création d'une nouvelle oeuvre avec les données récupérées.
		const work = await Works.create({
			title,
			imageUrl,
			categoryId,
			userId
		})
		// Retour de la nouvelle oeuvre en tant que réponse avec le code de statut 201 (Créé).
		return res.status(201).json(work)
	}catch (err) {
		// Si une erreur se produit, retourner une erreur 500 (Erreur interne du serveur).
		return res.status(500).json({ error: new Error('Quelque chose s\'est mal passé') })
	}
}

// Exportation d'une fonction pour supprimer une oeuvre.
exports.delete = async (req, res) => {
	try{
		// Suppression de l'oeuvre ayant l'ID spécifié dans la requête.
		await Works.destroy({where:{id: req.params.id}})
		// Retour d'un message de confirmation avec le code de statut 204 (Pas de contenu).
		return res.status(204).json({message: 'Oeuvre supprimée avec succès'})
	}catch(e){
		// Si une erreur se produit, retourner une erreur 500 (Erreur interne du serveur).
		return res.status(500).json({error: new Error('Quelque chose s\'est mal passé')})
	}

}
