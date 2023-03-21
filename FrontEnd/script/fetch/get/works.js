// Définition de l'URL de l'API pour la récupération des projets
const API_URL = "http://localhost:5678/api/works";

// Fonction qui envoie une requête HTTP GET à l'API pour récupérer les projets,
// et renvoie une promesse qui se résout avec les données de réponse sous forme d'objet JSON
export const fetchGetWorks = () => {
  return fetch(API_URL, {
    method: "GET",
  })
    .then((response) => {
        // Utilisation de la méthode response.json() pour extraire les données JSON de la réponse
        return response.json();
    })
    .catch((error) => {
      // Gestion des erreurs de requête en affichant l'erreur dans la console
      console.error(error);
    });
};
