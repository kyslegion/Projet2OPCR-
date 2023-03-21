
export function validationForm(formData) {
  // Initialisation de la variable "formIsValid" à true.
  let formIsValid = true;
  // Parcours de tous les champs du formulaire.
  formData.forEach((value, key) => {
    // Si une valeur est vide, la variable "formIsValid" est mise à false.
    if (!value) {
      formIsValid = false;
    }
  });
  // Si le formulaire n'est pas valide, un message d'erreur est ajouté au formulaire.
  if (!formIsValid) {
    const form = document.querySelector('#form');
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Veuillez remplir tous les champs.';
    form.appendChild(errorDiv);
    errorDiv.classList.add('error-message');
    return;
  }
}
