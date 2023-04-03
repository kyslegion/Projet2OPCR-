import { createHtml } from "./createHtml/createHtml.js";
import { modal } from "./modal/modal.js";

export let createModal = () => {
    // Appel de la fonction createHtml pour créer les éléments HTML nécessaires pour la fenêtre modale
    createHtml();
    // Appel de la fonction modal pour initialiser la fenêtre modale et la rendre interactive
    modal();
}
