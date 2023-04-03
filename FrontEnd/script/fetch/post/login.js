
import { loginConnected } from "../../event/connected/loginConnected/loginConnected.js";
import { fetchGetWorks } from "../../fetch/fetch.js";
import { filter } from "../../filter/filter.js";

export function fetchLoginPost(data) {
  // Faire une requête POST pour se connecter à l'API
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  // Traiter la réponse de la requête POST
  .then((response) => {
    switch (response.status) {
      // Si la connexion est réussie, afficher un message de connexion réussie et appeler la fonction loginConnected
      case 200:
        console.log("Connexion réussie");
        loginConnected();
        return response.json();
        
        break;
      case 404:
        console.log("Identifiant ou mot de passe incorrect");
        const form = document.getElementById("form");
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Identifiant ou mot de passe incorrect";
        errorMessage.style.color = "red";
        form.appendChild(errorMessage);
        break;
      default:
        console.log("Erreur, statut non pris en charge");
        break;
      }
    })
    // Traiter les données renvoyées par la première promesse, qui incluent le jeton JWT
    .then(data => {
      console.log(data);
      // Enregistrer le jeton JWT dans le stockage local du navigateur
      localStorage.setItem('token', JSON.stringify(data));
      // Récupérer les projets depuis l'API et les afficher en appelant les fonctions nécessaires
      fetchGetWorks().then((data) => {
        filter(data);
      });
    })
    // Gérer les erreurs éventuelles de la requête
    .catch((error) => {
      console.error(error);
    });
}
