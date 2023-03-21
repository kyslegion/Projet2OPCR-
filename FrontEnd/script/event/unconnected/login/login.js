
import { loginListener } from "./loginListener.js";
import { createLoginHtml } from "./createLoginHtml/createLoginHtml.js";
import { formLogin } from "./formLogin/formLogin.js";

// La fonction createLoginHtml va contenir le code HTML qui va être injecté via JS dans la page web
// La fonction formLogin va contenir tout ce qui concerne le formulaire de connexion

export function login() {
  // Va appeler la fonction loginListener en lui passant les deux fonctions createLoginHtml et formLogin en entrée
  loginListener(createLoginHtml, formLogin);
}
