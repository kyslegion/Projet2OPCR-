// import { workPost } from "../../../../../../../fetch/post/works.js";
import { formDataCreate } from "./functions/formDataCreate.js";
import { tokenGet } from "../../../../../../../fetch/post/works/tokenGet.js";
export function formEventListener(file){
    let form=document.querySelector('#form')
    form.addEventListener('submit',(event)=>{
      event.preventDefault();
      formDataCreate(form,file)
      tokenGet()
      // workPost()
      // export function formDataCreate(){

      // }
      
      // const formData = new FormData(form);
    
      // // Vérification des champs vides ou incomplets
      // let formIsValid = true;
      // formData.forEach((value, key) => {
      //   if (!value) {
      //     formIsValid = false;
      //   }
      // });
      // if (!formIsValid) {
      //   const errorDiv = document.createElement('div');
      //   errorDiv.textContent = 'Veuillez remplir tous les champs.';
      //   form.appendChild(errorDiv);
      //   errorDiv.classList.add('error-message');
      //   return;
      // }
    
      // formData.append('image', file);



// export function tokenGet(){

      // }
        // const data = Object.fromEntries(formData);
        // console.log(data);
        // const token = localStorage.getItem('token');
        // const tokenObj = JSON.parse(token);
        // // console.log(token,"et la");
        // const headers = { 'Authorization': 'Bearer ' + tokenObj.token }




    //     fetch("http://localhost:5678/api/works", {
    //       method: "POST",
    //       body: formData,
    //       headers: {
    //         // "Content-Type": "application/json",
    //         ...headers //utilisation de la destructuration pour inclure les en-têtes de l'objet `headers`
    //       }
    //     })
    //     .then((response) => {
    // switch (response.status) {
    //   case 200:
    //     console.log(response,"resss");
    //     console.log("La demande a réussi avec succès. Les données demandées sont disponibles.");
    //     // Faire quelque chose avec la réponse
    //     // form.reset();
        
    //     break;
    //   case 201:
    //     console.log("La ressource a été créée avec succès.");
    //     // Faire quelque chose avec la réponse
    //     // form.reset();
    //     break;
    //   case 204:
    //     console.log("La demande a réussi avec succès, mais aucune donnée n'a été renvoyée.");
    //     // Faire quelque chose avec la réponse
    //     break;
    //   case 400:
    //     console.log("La requête est mal formée ou invalide.");
    //     // Faire quelque chose avec la réponse
    //     break;
    //   case 401:
    //     console.log("L'utilisateur n'est pas autorisé à effectuer cette action.");
    //     // Faire quelque chose avec la réponse
    //     break;
    //   case 404:
    //     console.log("La ressource demandée est introuvable.");
    //     // Faire quelque chose avec la réponse
    //     break;
    //   case 500:
    //     console.log("Une erreur interne du serveur s'est produite.");
    //     // Faire quelque chose avec la réponse
    //     break;
    //   default:
    //     console.log("Une erreur inattendue s'est produite.");
    //     // Faire quelque chose avec la réponse
    //     break;
    // }
    //     })
    //     .catch((error) => {
    //       console.error(error, "on est dans modalListener");
    //     })
    //     .finally(() => {
    //       console.log("final");
    //       event.stopPropagation();
    //     });

        
    });
   

  }