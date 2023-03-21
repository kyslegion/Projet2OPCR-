

export let closeModal=()=>{
// Sélectionne tous les éléments avec la classe "croix"
const croixElements = document.querySelector('.croix');
// Parcourt chaque élément et ajoute un "event listener" au clic
croixElements.addEventListener('click', () => {
    // Ajoutez ici le code à exécuter lorsque l'élément est cliqué
    const box_manager = document.querySelector('#box_manager');
    box_manager.remove();
  });

}
