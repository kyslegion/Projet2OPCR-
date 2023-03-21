export function showFilteredProjects(data, filter) {

    // Créer un nouvel ensemble pour stocker les projets sans doublons
    let allSet = new Set();

    // Ajouter chaque projet à l'ensemble
    data.forEach(element => {
        allSet.add(element);
    })

    // Créer un nouvel ensemble pour stocker les projets filtrés
    let newSet = new Set();

    // Filtrer les projets qui correspondent au filtre
    allSet.forEach(element => {
        if (element.category.name == filter) {
            newSet.add(element);
        }
    })

    // Remplacer l'ensemble de tous les projets par l'ensemble filtré
    allSet = newSet;

    // Sélectionner l'élément HTML qui va contenir la galerie d'images
    let gallery = document.querySelector('.gallery');

    // Supprimer tous les éléments enfants de la galerie
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }

    // Parcourir tous les projets filtrés et créer un élément HTML pour chacun
    allSet.forEach(element => {
        // Créer un élément HTML de type figure
        let figure = document.createElement('figure');

        // Créer un élément HTML de type image et définir son URL
        let img = document.createElement('img');
        img.src = element.imageUrl;

        // Créer un élément HTML de type légende et définir son contenu
        let figcaption = document.createElement('figcaption');
        figcaption.innerHTML = element.title;

        // Ajouter l'image et la légende à l'élément figure
        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Ajouter l'élément figure à la galerie d'images
        gallery.appendChild(figure);
    });
}
