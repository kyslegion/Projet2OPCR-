
import { login } from "./event/unconnected/login/login.js";
import { fetchGetWorks } from "./fetch/fetch.js";
import { filter } from "./filter/filter.js";

// Appel de la fonction de récupération des projets sur la page d'accueil
fetchGetWorks().then((data) => {
    filter(data);
});

// Appel de la fonction de connexion de l'administrateur
login()
