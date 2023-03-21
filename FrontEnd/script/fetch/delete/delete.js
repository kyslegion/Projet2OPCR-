// Définition de l'URL de l'API
const API_URL = "http://localhost:5678/api/works";

import { filter } from "../../filter/filter.js";
import { fetchGetWorks } from "../get/works.js";

// Fonction pour supprimer une entrée dans la base de données
export const fetchDelete = (parentId,parentElement) => {
  // Récupération du token d'authentification depuis le stockage local
  const token = localStorage.getItem('token');
  const tokenObj = JSON.parse(token);
  
  // Récupération des projets depuis le stockage local
  const projects = localStorage.getItem('projects');
  
  // Définition des headers pour la requête de suppression
  const headers = { 
    'Authorization': 'Bearer ' + tokenObj.token,
    "Content-Type": "multipart/form-data",
  };

  // Envoi de la requête de suppression à l'API
  fetch(`${API_URL}/${parentId}`, {
    method: "DELETE",
    headers:headers
  })
    .then((response) => {
      // Gestion des erreurs
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression.");
      }
      
      // Suppression de l'élément du DOM
      parentElement.remove()

      // Mise à jour de la liste des projets après suppression
      console.log("L'élément a été supprimé avec succès.");
      fetchGetWorks().then((data) => {
        filter(data)
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
