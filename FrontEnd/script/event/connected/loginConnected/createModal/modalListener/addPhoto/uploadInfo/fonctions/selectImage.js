
export function selectImage() {
  // Sélection du label pour ajouter un écouteur d'événement.
  const label = document.querySelector('label[for="image"]');
  // Sélection de l'input pour télécharger une image.
  const input = document.querySelector('#image-upload');
  
  // Ajout d'un écouteur d'événement pour l'événement "click" du label.
  label.addEventListener('click', (e) => {
    e.preventDefault();
    // Simulation d'un clic sur l'input pour ouvrir le menu de sélection de fichier.
    input.click();
  });
}
