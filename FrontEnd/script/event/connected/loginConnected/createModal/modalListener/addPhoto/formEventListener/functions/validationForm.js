export function validationForm(){
    console.log("on est dans validation form");
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
  }