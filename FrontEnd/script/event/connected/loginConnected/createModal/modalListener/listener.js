import { fetchDelete } from "../../../../../fetch/delete/delete.js";
export let listener=()=>{
    let form=document.querySelector('#form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        // event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const token = localStorage.getItem('token');
        const tokenObj = JSON.parse(token);
        // console.log(token,"et la");
        const headers = { 'Authorization': 'Bearer ' + tokenObj.token }
        fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "application/json",
          ...headers //utilisation de la destructuration pour inclure les en-têtes de l'objet `headers`
        }
      })
        .then((response) => {
          switch (response.status) {
            case 200:
              console.log("La demande a réussi avec succès. Les données demandées sont disponibles.");
              // Faire quelque chose avec la réponse
              break;
            case 201:
              console.log("La ressource a été créée avec succès.");
              // Faire quelque chose avec la réponse
              break;
            case 204:
              console.log("La demande a réussi avec succès, mais aucune donnée n'a été renvoyée.");
              // Faire quelque chose avec la réponse
              break;
            case 400:
              console.log("La requête est mal formée ou invalide.");
              // Faire quelque chose avec la réponse
              break;
            case 401:
              console.log("L'utilisateur n'est pas autorisé à effectuer cette action.");
              // Faire quelque chose avec la réponse
              break;
            case 404:
              console.log("La ressource demandée est introuvable.");
              // Faire quelque chose avec la réponse
              break;
            case 500:
              console.log("Une erreur interne du serveur s'est produite.");
              // Faire quelque chose avec la réponse
              break;
            default:
              console.log("Une erreur inattendue s'est produite.");
              // Faire quelque chose avec la réponse
              break;
          }
        })
        .catch((error) => {
          console.error(error,"on est dans listener");
        });
        return false;

    })
    // const workCtrl = require('../controllers/works.controller');
    let deletefile=document.querySelectorAll('.deletefile')
    deletefile.forEach(element => {
      element.addEventListener("click", (e)=>{
        e.preventDefault();
        const parentId = parseInt(e.target.parentElement.id,"idd");
        console.log(parentId, typeof parentId);
        fetchDelete(parentId)
      });
      
    });
}
