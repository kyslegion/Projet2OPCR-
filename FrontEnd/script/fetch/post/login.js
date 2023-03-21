// Importer les fonctions nécessaires pour la gestion de la connexion et de l'affichage des projets
import { loginConnected } from "../../event/connected/loginConnected/loginConnected.js";
import { fetchGetWorks } from "../../fetch/get/works.js";
import { filter } from "../../filter/filter.js";

// La fonction fetchLoginPost prend en entrée les données de l'utilisateur pour la connexion
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
        // Récupérer le jeton JWT depuis la réponse de la requête et le retourner
        return response.json();
        
        break;
      // Si l'identifiant ou le mot de passe est incorrect, afficher un message d'erreur
      case 404:
        console.log("Identifiant ou mot de passe incorrect");
        const form = document.getElementById("form");
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Identifiant ou mot de passe incorrect";
        errorMessage.style.color = "red";
        form.appendChild(errorMessage);
        break;
      // Si le statut de la réponse n'est pas pris en charge, afficher un message d'erreur
      default:
        console.log("Erreur, statut non pris en charge");
        break;
      }
    })
    // Traiter les données renvoyées par la première promesse, qui incluent le jeton JWT
    .then(data => {
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
