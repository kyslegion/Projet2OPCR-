import { createLoginHtml } from "./createLoginHtml/createLoginHtml.js";
import { formListener } from "./formListener/formListener.js";
// import { fetchGetWorks } from "../../../fetch/get/works.js";
export function login() {
  let login=document.querySelector('#login')
  login.addEventListener('click',(e)=>{
    e.preventDefault()
    createLoginHtml()
    formListener()
    console.log('click sur login');
  })
}