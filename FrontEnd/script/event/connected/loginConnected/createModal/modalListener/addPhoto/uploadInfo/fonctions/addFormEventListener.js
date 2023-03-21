export function addFormEventListener(formEventListener) {
  const input = document.querySelector('#image-upload');
  
  // Ajout d'un écouteur d'événement pour l'événement "change" de l'input.
  input.addEventListener('change', (e) => {
    e.preventDefault();
    // Récupération du fichier sélectionné dans l'input.
    const file = input.files[0];
    // Appel de la fonction "formEventListener" passée en paramètre avec le fichier sélectionné en argument.
    formEventListener(file);
  });
}
