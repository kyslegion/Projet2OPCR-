
import { fetchDelete } from "../../../../../fetch/fetch.js";
import { addPhotoListener } from "./addPhoto/addPhotoListener.js";
import { deletefile } from "./fonctions/delete.js";

export let modalListener = () => {
  // Appel de la fonction "addPhotoListener" pour ajouter un listener aux boutons d'ajout de photo.
  addPhotoListener();
  // Appel de la fonction "deletefile" en lui passant la fonction "fetchDelete" en paramètre
  // pour ajouter un listener aux boutons de suppression de fichier.
  deletefile(fetchDelete);
};
