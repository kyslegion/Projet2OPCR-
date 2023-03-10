import { fetchDelete } from "../../../../../fetch/delete/delete.js";
import { addPhotoListener } from "./addPhoto/addPhoto.js";
// import { addPhotoHtml } from "./addPhoto/addPhotoHtml";
import { deleteGallery, deleteGalleryListener } from "./deleteGallery/deleteGallery.js";

export let modalListener=()=>{
  addPhotoListener()
  // deleteGalleryListener()
  
  let deletefile=document.querySelectorAll('.deletefile')
  deletefile.forEach(element => {
    element.addEventListener("click", (e)=>{
      console.log(e,"event");
      e.preventDefault(); // Empêche le comportement par défaut du bouton
      const parentId = parseInt(e.target.parentElement.id,"id");
      console.log(parentId, typeof parentId);
      fetchDelete(parentId)
        .then(() => {
          console.log("L'élément a été supprimé avec succès.");
          e.target.parentElement.remove();
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });
};
