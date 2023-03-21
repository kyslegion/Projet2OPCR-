
export function previewImage() {
  // Sélection de l'input pour télécharger une image.
  const input = document.querySelector('#image-upload');
  // Sélection de l'élément pour afficher la prévisualisation de l'image.
  const preview = document.querySelector('#image-preview');
  
  // Ajout d'un écouteur d'événement pour l'événement "change" de l'input.
  input.addEventListener('change', (e) => {
    e.preventDefault();
    // Récupération du fichier sélectionné dans l'input.
    const file = input.files[0];
  
    if (file) {
      // Création d'un objet FileReader pour lire le contenu du fichier.
      const reader = new FileReader();
  
      reader.addEventListener('load', (e) => {
        e.preventDefault();
        // Création d'un élément image pour afficher la prévisualisation de l'image.
        const image = new Image();
        image.src = reader.result;
        // Suppression de tout contenu précédent de l'élément pour afficher uniquement l'image prévisualisée.
        preview.innerHTML = '';
        preview.appendChild(image);
      });
  
      // Lecture du contenu du fichier en tant que données URL.
      reader.readAsDataURL(file);
    }
  });
}
