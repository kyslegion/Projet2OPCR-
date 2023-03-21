import { fetchDelete } from "../../../../../fetch/delete/delete.js";
import { addPhotoListener } from "./addPhoto/addPhotoListener.js";
import { deletefile } from "./fonctions/delete.js";

// Définition d'une fonction "modalListener" qui associe deux listeners aux éléments de la page :
export let modalListener = () => {
  // Appel de la fonction "addPhotoListener" pour ajouter un listener aux boutons d'ajout de photo.
  addPhotoListener();
  // Appel de la fonction "deletefile" en lui passant la fonction "fetchDelete" en paramètre
  // pour ajouter un listener aux boutons de suppression de fichier.
  deletefile(fetchDelete);
};
