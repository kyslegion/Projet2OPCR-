
import { loginConnected } from "../../event/connected/loginConnected/loginConnected.js";
import { fetchGetWorks } from "../../fetch/get/works.js";
import { filter } from "../../filter/filter.js";
export function fetchLoginPost(data) {
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    switch (response.status) {
      case 200:
        console.log("Connexion réussie");
        loginConnected()
        return response.json()
        
        break;
      case 404:
        console.log("Identifiant ou mot de passe incorrect");
        const form = document.getElementById("form");
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Identifiant ou mot de passe incorrect";
        errorMessage.style.color = "red";
        form.appendChild(errorMessage);
        break;
      
      default:
        console.log("Erreur, statut non pris en charge");
        break;
      }
    })
    .then(data => {
      localStorage.setItem('token', JSON.stringify(data));
      console.log(data);
      fetchGetWorks().then((data) => {
        console.log(data);
        filter(data)
      });
    })
    .catch((error) => {
      console.error(error);
    });
    
}
