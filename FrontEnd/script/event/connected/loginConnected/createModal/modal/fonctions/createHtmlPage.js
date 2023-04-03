// import { fetchGetWorks } from "../../../../../../fetch/get/works2.js";
import { fetchGetWorks } from "../../../../../../fetch/fetch.js";

// Création d'une fonction qui va générer la page HTML
export function createHtmlPage() {
  // On retourne une Promise pour pouvoir gérer l'asynchronisme
  return new Promise((resolve) => {
    // On récupère les données en faisant une requête GET
    fetchGetWorks().then((data) => {
      // On stocke les données dans le local storage
      localStorage.setItem('projects', JSON.stringify(data));

      // On sélectionne le body du document
      let body = document.querySelector("body");

      // Création des éléments HTML
      let box_manager = document.createElement("box_manager");
      let dark_filter = document.createElement("div");
      let container = document.createElement("div");
      let content = document.createElement("div");
      let ul = document.createElement("ul");
      
      // Ajout des attributs et des classes aux éléments HTML
      box_manager.id='box_manager';
      dark_filter.id = "dark_filter";
      container.id = "container";
      content.id = "content";
      ul.className = "box_image";
      
      // On boucle sur les données pour créer les éléments HTML correspondants
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
        li.appendChild(deletefile)
        li.appendChild(img);
        ul.appendChild(li);
      });

      // Création des éléments HTML pour la partie titre et boutons d'actions
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

      // Ajout des éléments créés dans l'ordre dans lequel ils doivent apparaître sur la page
      content.appendChild(ul);
      container.appendChild(titre);
      container.appendChild(content);
      container.appendChild(addProject);
      box_manager.appendChild(dark_filter)
      box_manager.appendChild(container)
      body.appendChild(box_manager);

      // On résout la Promise une fois que la page HTML a été générée
      resolve();
    });
  });
}
