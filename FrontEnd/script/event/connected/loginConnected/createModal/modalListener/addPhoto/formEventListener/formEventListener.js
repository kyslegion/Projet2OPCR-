
import { formDataCreate } from "./functions/formDataCreate.js";
export function formEventListener(file){
    let form=document.querySelector('#form')
    // let uploadedFile;
    form.addEventListener('submit',(event)=>{
      // console.log("on est dans submit form avant l'l'en voi",file);
      event.preventDefault();
      // console.log("file dans addventlistene");
      // console.log(event);
      formDataCreate(form,file)
    });
  }