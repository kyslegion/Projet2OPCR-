export function deletefile(fetchDelete) {
    // Sélection de tous les boutons de suppression de fichiers
  let deletefile=document.querySelectorAll('.deletefile');

  // Ajout d'un écouteur d'événements pour chaque bouton de suppression de fichiers
  deletefile.forEach(element => {
    element.addEventListener("click", (event)=>{

      // Annulation de l'événement par défaut pour éviter une redirection
      event.preventDefault(); 

      // Récupération de l'ID parent de l'élément sélectionné
      const parentId = parseInt(event.target.parentElement.id,"id");
      let x=event.target.parentElement;

      // Envoi d'une requête de suppression au serveur pour supprimer le fichier correspondant
      fetchDelete(parentId,x);
    });
  });
}