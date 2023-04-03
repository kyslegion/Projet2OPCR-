const db = require('./../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = db.users;

exports.signup = async (req, res) => {
	if(!req.body.email || !req.body.password){
		return res.status(400).send({
			message: "Must have email and password"
		});
	}
	try{
		const hash = await bcrypt.hash(req.body.password, 10)
		const user = {
			email: req.body.email,
			password: hash
		}
		await Users.create(user)
		return res.status(201).json({message: 'User Created'})
	}catch (err){
		return res.status(500).send({
			message: err.message
		});
	}

}

exports.login = async (req, res) => {
	// Récupération de l'utilisateur correspondant à l'adresse e-mail fournie
	const user = await Users.findOne({ where: { email: req.body.email } });
  
	// Vérification de l'existence de l'utilisateur
	if (user === null) {
	  // Renvoi d'une erreur 404 si l'utilisateur n'est pas trouvé
	  return res.status(404).json({ message: 'User not found' });
	} else {
	  // Comparaison du mot de passe fourni avec le mot de passe stocké
	  const valid = await bcrypt.compare(req.body.password, user.password);
  
	  // Vérification de la validité du mot de passe
	  if (!valid) {
		// Renvoi d'une erreur 401 si le mot de passe est invalide
		return res.status(401).json({ error: new Error('Not authorized') });
	  } else {
		// Génération d'un jeton d'authentification valide pendant 24 heures
		const token = jwt.sign(
		  { userId: user.id },
		  process.env.TOKEN_SECRET,
		  { expiresIn: '24h' }
		);
  
		// Renvoi de l'ID de l'utilisateur et du jeton d'authentification dans la réponse
		return res.status(200).json({ userId: user.id, token: token });
	  }
	}
  };
