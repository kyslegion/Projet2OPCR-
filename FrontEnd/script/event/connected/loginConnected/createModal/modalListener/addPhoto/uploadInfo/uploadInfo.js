import { formEventListener } from "../formEventListener/formEventListener.js";
import { selectImage } from "./fonctions/selectImage.js";
import { previewImage } from "./fonctions/previewImage.js";
import { addFormEventListener } from "./fonctions/addFormEventListener.js";

export function uploadInfo() {
  // Appel de la fonction "selectImage" pour ajouter un listener sur le label et l'input permettant de sélectionner une image.
  selectImage();
  // Appel de la fonction "previewImage" pour afficher une prévisualisation de l'image sélectionnée.
  previewImage();
  // Appel de la fonction "addFormEventListener" en lui passant la fonction "formEventListener" en paramètre
  // pour ajouter un listener sur l'input permettant d'envoyer le formulaire avec l'image sélectionnée.
  addFormEventListener(formEventListener);
}
