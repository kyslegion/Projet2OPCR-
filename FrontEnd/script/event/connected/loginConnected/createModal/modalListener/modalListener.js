import { fetchDelete } from "../../../../../fetch/delete/delete.js";
import { addPhotoListener } from "./addPhoto/addPhoto.js";
// import { addPhotoHtml } from "./addPhoto/addPhotoHtml";
import { deleteGallery, deleteGalleryListener } from "./deleteGallery/deleteGallery.js";

export let modalListener=()=>{
  addPhotoListener()
  // deleteGalleryListener()
  
  let deletefile=document.querySelectorAll('.deletefile')
  deletefile.forEach(element => {
    element.addEventListener("click", (event)=>{
      // debugger
      console.log(event,"event");
      event.preventDefault(); // Empêche le comportement par défaut du bouton
      const parentId = parseInt(event.target.parentElement.id,"id");
      let x=event.target.parentElement
      console.log(parentId, typeof parentId);
      fetchDelete(parentId,x)
        // .then(() => {
        //   console.log("L'élément a été supprimé avec succès.");
        //   // e.target.parentElement.remove();
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
    });
  });
};
