import { tokenGet } from "./works/tokenGet.js";
tokenGet()
export function workPost(formData){
        fetch("http://localhost:5678/api/works", {
          method: "POST",
          body: formData,
          headers: {
            // "Content-Type": "application/json",
            ...headers //utilisation de la destructuration pour inclure les en-têtes de l'objet `headers`
          }
        })
        .then((response) => {
    switch (response.status) {
      case 200:
        console.log(response,"resss");
        console.log("La demande a réussi avec succès. Les données demandées sont disponibles.");
        // Faire quelque chose avec la réponse
        // form.reset();
        
        break;
      case 201:
        console.log("La ressource a été créée avec succès.");
        // Faire quelque chose avec la réponse
        // form.reset();
        break;
      case 204:
        console.log("La demande a réussi avec succès, mais aucune donnée n'a été renvoyée.");
        // Faire quelque chose avec la réponse
        break;
      case 400:
        console.log("La requête est mal formée ou invalide.");
        // Faire quelque chose avec la réponse
        break;
      case 401:
        console.log("L'utilisateur n'est pas autorisé à effectuer cette action.");
        // Faire quelque chose avec la réponse
        break;
      case 404:
        console.log("La ressource demandée est introuvable.");
        // Faire quelque chose avec la réponse
        break;
      case 500:
        console.log("Une erreur interne du serveur s'est produite.");
        // Faire quelque chose avec la réponse
        break;
      default:
        console.log("Une erreur inattendue s'est produite.");
        // Faire quelque chose avec la réponse
        break;
    }
        })
        .catch((error) => {
          console.error(error, "on est dans modalListener");
        })
        .finally(() => {
          console.log("final");
          event.stopPropagation();
        });
}