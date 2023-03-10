import { workPost } from "../../../../../../../../fetch/post/works";
export function formDataCreate(form,file){
    const formData = new FormData(form);
    console.log(formData,);
    
    let formIsValid = true;
    formData.forEach((value, key) => {
      if (!value) {
        formIsValid = false;
      }
    });
    if (!formIsValid) {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = 'Veuillez remplir tous les champs.';
      form.appendChild(errorDiv);
      errorDiv.classList.add('error-message');
      return;
    }
  
    formData.append('image', file);

    workPost(formData)

  }