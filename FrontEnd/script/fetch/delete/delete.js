const API_URL = "http://localhost:5678/api/works";
export const fetchDelete = (id,e) => {
  const token = localStorage.getItem('token');
  const tokenObj = JSON.parse(token);
  const projects = localStorage.getItem('projects');
  const headers = { 
    'Authorization': 'Bearer ' + tokenObj.token,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers:headers
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression.");
      }
      console.log(reponse);
      console.log("L'élément a été supprimé avec succès.");
      // form.reset();
      e.preventDefault();
    })
    .catch((error) => {
      console.error(error);
    });
    
};
