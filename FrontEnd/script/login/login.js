import { fetchGet } from "../fetch/fetchGet.js";
import { filter } from "../filter/filter.js";
import { createHTML } from "../../script/createHTML/createHTML.js";
export function login(savedToken) {
    // console.log("je suis dans login");
    let login=document.querySelector('#login')

    login.addEventListener('click',()=>{
      console.log("je clique dans login.js");
        let main=document.querySelector('main')
        main.innerHTML=`
        <h2 class="h2">Log in</h2>
        <form class="form" id="form" action="/example" method="POST">
          <label for="email">Email
            <input type="email" id="email" name="email">
          </label>
          
          <label for="password">Mot de passe
            <input type="password" id="password" name="password">
          </label>
          
          <input type="submit" value="Se connecter">
          <a href="#">Mot de passe oublié?</a>
        </form>`

        form.addEventListener("submit", (event) => {
          event.preventDefault();
    
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);

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
                  fetchGet(false,filter)
                  createHTML()
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
              console.log(data);
              savedToken=data
            })
            .catch((error) => {
              console.error(error);
            });
        });
    })
}