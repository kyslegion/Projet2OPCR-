

export let closeModal=()=>{
// Sélectionne tous les éléments avec la classe "croix"
const croixElements = document.querySelector('.croix');
console.log(croixElements,"hey");
// Parcourt chaque élément et ajoute un "event listener" au clic
croixElements.addEventListener('click', () => {
    // Ajoutez ici le code à exécuter lorsque l'élément est cliqué
    console.log('L\'élément avec la classe "croix" a été cliqué !');
    const box_manager = document.querySelector('#box_manager');
    // const modal = document.querySelector('.modal');
    // modal.remove();
    box_manager.remove();
  });

}
