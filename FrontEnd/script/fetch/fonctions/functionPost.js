// Importation des fonctions "tokenGet" et "fetchGetWorks" depuis d'autres fichiers.
// import { tokenGet } from "./works/tokenGet.js";
// import { fetchGetWorks } from "../get/works.js";
import { fetchGetWorks } from "../fetch.js";
// Importation de la fonction "filter" depuis un autre fichier.
import { filter } from "../../filter/filter.js";

// Définition d'une fonction "workPost" qui envoie une requête POST pour envoyer les données du formulaire à l'API.
export function functionPost(formData) {
  // Récupération du token d'authentification.
  const tokenObj = tokenGet();
  // Définition des headers pour inclure le token d'authentification.
  const headers = { 'Authorization': 'Bearer ' + tokenObj.token }

  // Envoi de la requête POST à l'API.
  fetch("http://localhost:5678/api/works", {
    method: "POST",
    body: formData,
    headers: {
      ...headers
    }
  })
  .then((response) => {
    // Suppression du formulaire du DOM.
    let form=document.querySelector('#form')
    form.remove()
    
    // Récupération des données mises à jour depuis l'API.
    return new Promise((resolve) => {
      fetchGetWorks().then((data) => {
        // Filtrage des données pour ne récupérer que les éléments de la galerie photo.
        filter(data);
        // Sélection du container principal.
        let container=document.querySelector('#container');

        // Création des éléments HTML pour afficher la galerie photo mise à jour.
        let content = document.createElement("div");
        let ul = document.createElement("ul");

        container.id = "container";
        content.id = "content";
        ul.className = "box_image";

        data.forEach((element) => {
          let li = document.createElement("li");
          let img = document.createElement("img");
          let deletefile = document.createElement("input");
          deletefile.type = "button";
          deletefile.className = "deletefile";
          deletefile.value = "Effacer";
        
          li.setAttribute('id', element.id);
          img.src = element.imageUrl;
          li.className = "mini_img";
          li.appendChild(deletefile);
          li.appendChild(img);
          ul.appendChild(li);
        });

        let titre = document.createElement("div");
        titre.className = "titre";
        titre.innerHTML = "Galerie photo";
        let croix = document.createElement("div");
        croix.className = "croix";
        croix.innerHTML = "X";
        titre.appendChild(croix);
        let addProject = document.createElement("div");
        addProject.id = "addProject";
        addProject.innerHTML = `
        <button id='addPhoto'>Ajouter une photo</button>
        <button id='deleteGallery'>Supprimer la galerie</button>
        `;

        content.appendChild(ul);
        container.appendChild(titre);

        container.appendChild(content);
        container.appendChild(addProject);
        resolve();
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
}
