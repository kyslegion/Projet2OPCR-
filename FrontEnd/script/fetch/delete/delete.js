const API_URL = "http://localhost:5678/api/works";
import { filter } from "../../filter/filter.js";
import { fetchGetWorks } from "../get/works.js";
export const fetchDelete = (id,x) => {
  const token = localStorage.getItem('token');
  const tokenObj = JSON.parse(token);
  const projects = localStorage.getItem('projects');
  const headers = { 
    'Authorization': 'Bearer ' + tokenObj.token,
    "Content-Type": "multipart/form-data",
  };

  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers:headers
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression.");
      }
      console.log(response);
      console.log(x,"dans delete");
      x.remove()
      console.log("L'élément a été supprimé avec succès.");
      fetchGetWorks().then((data) => {
        console.log(data,'liste objet accueil');
        filter(data)
      });
      // form.reset();
      // e.preventDefault();
    })
    .catch((error) => {
      console.error(error);
    });
    
};
