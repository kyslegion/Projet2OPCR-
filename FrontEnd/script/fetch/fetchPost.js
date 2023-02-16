export function fetchPost(fetchGet,filter,createHTML) {
  console.log("je suis dans fetchPost.js");

  let login = document.querySelector("#login");
  login.addEventListener("click", () => {
    const form = document.querySelector("form");

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
          console.log(response.json());
          console.log(response.status);
          switch (response.status) {
            case 200:
              console.log("Connexion réussie");
              fetchGet(false,filter)
              createHTML()
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
        .catch((error) => {
          console.error(error);
        });
    });
  });
}
