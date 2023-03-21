export function darkfilter() {
    // Ajout d'un écouteur d'événements sur le filtre sombre pour fermer la modale
    let dark_filter = document.querySelector('#dark_filter');
    dark_filter.addEventListener('click', (e) => {
        e.preventDefault();
        let box_manager = document.querySelector('#box_manager');
        box_manager.remove();
    });

}