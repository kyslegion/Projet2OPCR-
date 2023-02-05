import { showAllProjects } from "./showAllProjects.js";
import { showFilteredProjects } from "./showFilteredProjects.js";

export function filter(data) {
    

    //ON RECUPERE LE DOSSIER DANS LEQUEL S'AFFICHE LES IMAGES
    let gallery = document.querySelector('.gallery');

    //ON RECUPRE LES DIFFERENTS BOUTONS FILTRES
    const all = document.getElementById('all');
    const objects = document.getElementById('objects');
    const flats = document.getElementById('flats');
    const hotels_and_restaurants = document.getElementById('hotels_and_restaurants');

    //ON INITIALISE L'AFFICHAGE DES PROJETS/IMAGES AVANT QUIL NE SOIT FILTRé
    showAllProjects(data)
   

    //ON MET UN LISTENER SUR LES BOUTONS POUR DECLENCHER DU JAVASCRIPT LORS D'UN CLICK

    //AFFICHE TOUT LES PROJETS
    all.addEventListener('click', () => {
         showAllProjects(data)
    });
    // AFFICHE UNIQUEMENT LES OBJETS
    objects.addEventListener('click', () => {
        let filter="Objets"
        showFilteredProjects(data,filter)
    });
    // AFFICHE UNIQUEMENT LES APPARTEMENTS
    flats.addEventListener('click', () => {
        let filter="Appartements"
        showFilteredProjects(data,filter)
    });
    // AFFICHE UNIQUEMENT LES LES HOTELS ET RESTAURANTS
    hotels_and_restaurants.addEventListener('click', () => {
        let filter="Hotels & restaurants"
        showFilteredProjects(data,filter)
    });
}