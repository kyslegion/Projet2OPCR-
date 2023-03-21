// Importation du module de connexion pour l'administrateur
import { login } from "./event/unconnected/login/login.js";

// Importation du module de récupération des projets sur la page d'accueil
import { fetchGetWorks } from "./fetch/get/works.js";

// Importation du module de filtrage des projets sur la page d'accueil
import { filter } from "./filter/filter.js";

// Appel de la fonction de récupération des projets sur la page d'accueil
fetchGetWorks().then((data) => {
    console.log(data, 'liste des projets');
    filter(data);
});

// Appel de la fonction de connexion de l'administrateur
login()
