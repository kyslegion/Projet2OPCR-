
import { showAllProjects } from "./fonctions/showAllProjects.js";
import { showFilteredProjects } from "./fonctions/showFilteredProjects.js";

// La fonction showAllProjects permet d'afficher tous les projets sans filtre
// La fonction showFilteredProjects permet d'afficher les projets qui correspondent à un filtre

export function filter(data) {

    // Sélectionner l'élément HTML qui va contenir la galerie d'images
    let gallery = document.querySelector('.gallery');

    // Sélectionner les éléments HTML pour les filtres
    const all = document.getElementById('all');
    const objects = document.getElementById('objects');
    const flats = document.getElementById('flats');
    const hotels_and_restaurants = document.getElementById('hotels_and_restaurants');

    // Afficher tous les projets au chargement de la page
    showAllProjects(data);

    // Ajouter des écouteurs d'événements pour les filtres
    all.addEventListener('click', () => {
         showAllProjects(data);
    });
    objects.addEventListener('click', () => {
        // Filtre par catégorie "Objets"
        let filter = "Objets";
        showFilteredProjects(data, filter);
    });
    flats.addEventListener('click', () => {
        // Filtre par catégorie "Appartements"
        let filter = "Appartements";
        showFilteredProjects(data, filter);
    });
    hotels_and_restaurants.addEventListener('click', () => {
        // Filtre par catégorie "Hotels & restaurants"
        let filter = "Hotels & restaurants";
        showFilteredProjects(data, filter);
    });
}
