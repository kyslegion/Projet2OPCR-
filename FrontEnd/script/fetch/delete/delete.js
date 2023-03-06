const API_URL = "http://localhost:5678/api/works";
export const fetchDelete = (id) => {
  const token = localStorage.getItem('token');
  const tokenObj = JSON.parse(token);
  const projects = localStorage.getItem('projects');
  // console.log(token,"et la");
  const headers = { 'Authorization': 'Bearer ' + tokenObj.token }

  return fetch(`${API_URL}/${id}`, {
    // return fetch(API_URL, {
    method: "DELETE",
    headers: {
      // "Content-Type": "application/json",
      ...headers //utilisation de la destructuration pour inclure les en-têtes de l'objet `headers`
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de la suppression.");
      }
      console.log("L'élément a été supprimé avec succès.");
    })
    .catch((error) => {
      console.error(error);
    });
};
