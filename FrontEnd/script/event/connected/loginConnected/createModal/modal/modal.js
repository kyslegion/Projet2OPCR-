// Importation des modules nécessaires
import { createHtmlPage } from "./fonctions/createHtmlPage.js";
import { modalListener } from "../modalListener/modalListener.js";
import { closeModal } from "../closeModal/closeModal.js";
import { darkfilter } from "./fonctions/darkfilter.js";


export function modal() {
    // Sélection de l'élément HTML correspondant au bouton d'édition de la modale
    let modal = document.querySelector('.edit');

    // Ajout d'un écouteur d'événements sur le bouton d'édition
    modal.addEventListener('click', (e) => {
        e.preventDefault();

        // Vérification si la modale est déjà ouverte
        if (document.querySelector('#box_manager') === null) {

            // Création de la page HTML correspondant à la modale
            createHtmlPage().then(() => {
                // Ajout des écouteurs d'événements pour les boutons et les champs de la modale
                modalListener();
                closeModal();
                darkfilter();
            });
        }
    });
}
