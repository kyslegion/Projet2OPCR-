
import { addPhotoHtml } from "./addPhotoHtml/addPhotoHtml.js";
import { uploadInfo } from "./uploadInfo/uploadInfo.js";

export function addPhotoListener() {
  // Sélection du bouton "addPhoto".
  let add = document.querySelector('#addPhoto');
  // Ajout d'un écouteur d'événement pour l'événement "click" du bouton "addPhoto".
  add.addEventListener('click', (e) => {
    e.preventDefault();
    // Appel de la fonction "addPhotoHtml" pour ajouter le formulaire d'ajout de photo à la page.
    addPhotoHtml();
    // Appel de la fonction "uploadInfo" pour ajouter les écouteurs d'événements liés à la sélection et à l'envoi d'une photo.
    uploadInfo();
  });
}
