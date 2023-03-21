// Importation de la fonction "formDataCreate" depuis un autre fichier.
import { formDataCreate } from "./functions/formDataCreate.js";

// Définition d'une fonction "formEventListener" qui prend un fichier en paramètre.
export function formEventListener(file){
  // Sélection du formulaire.
  let form = document.querySelector('#form');
  // Ajout d'un écouteur d'événement pour l'événement "submit" du formulaire.
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Appel de la fonction "formDataCreate" pour créer un objet FormData avec les données du formulaire et le fichier sélectionné.
    formDataCreate(form, file);
  });
}
