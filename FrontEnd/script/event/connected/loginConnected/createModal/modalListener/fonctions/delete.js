export function deletefile(fetchDelete) {
  // Sélection de tous les boutons de suppression de fichiers
  const deleteButtons = document.querySelectorAll('.deletefile');

  // Ajout d'un écouteur d'événements pour chaque bouton de suppression de fichiers
  deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      // Annulation de l'événement par défaut pour éviter une redirection
      event.preventDefault(); 

      // Récupération de l'ID parent de l'élément sélectionné
      const parentId = parseInt(event.target.parentElement.id, "id");

      // Récupération de l'élément parent de l'élément sélectionné
      const parentElement = event.target.parentElement;

      // Appel de la fonction fetchDelete pour supprimer le fichier correspondant
      fetchDelete(parentId, parentElement);
    });
  });
}
