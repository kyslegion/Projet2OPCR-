import { tokenGet } from "./works/tokenGet.js";
export function workPost(formData) {
  console.log(formData,"dans work");
  const tokenObj = tokenGet();
  // const headers = { 'Content-Type': 'application/json','Authorization': 'Bearer ' + tokenObj.token };
  const headers = { 'Authorization': 'Bearer ' + tokenObj.token }

  // Convert form data object to JSON object
//   const jsonObject = {};
//   for (const [key, value] of formData.entries()) {
//     jsonObject[key] = value;
//   }
// console.log(jsonObject,"on regarde json object");
  // Stringify JSON object and send in request body
  fetch("http://localhost:5678/api/works", {
    method: "POST",
    body: formData,
    headers: {
      // "Content-Type": "application/json",
      ...headers //utilisation de la destructuration pour inclure les en-têtes de l'objet `headers`
    }
  })
  .then((response) => {
    // ...
  })
  .catch((error) => {
    console.error(error, "on est dans modalListener");
  })
  .finally(() => {
    console.log("final");
  });
}
