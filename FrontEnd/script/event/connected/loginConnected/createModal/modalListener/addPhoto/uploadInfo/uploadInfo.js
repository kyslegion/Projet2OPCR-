import { formEventListener } from "../formEventListener/formEventListener.js";
export function uploadInfo() {
    const label = document.querySelector('label[for="image"]');
    const input = document.querySelector('#image-upload');
    const preview = document.querySelector('#image-preview');
    const previewToDelete = document.querySelector('#preview');
  
    label.addEventListener('click', (e) => {
      e.preventDefault()
      input.click();//transforme le texte en element clickable
    });
  
    input.addEventListener('change', (e) => {
      e.preventDefault()
      const file = input.files[0];
      console.log(file,"on est dans le input change");
  
      if (file) {
        const reader = new FileReader();
  
        reader.addEventListener('load', (e) => {
          e.preventDefault()
          const image = new Image();
          image.src = reader.result;
          preview.innerHTML = '';
          preview.appendChild(image);
// ECOUTEUR DEVENEMENT
          formEventListener(file)
        });
  
        reader.readAsDataURL(file);
      }
    });
    // document.querySelector('#form').addEventListener('submit', (e) => {
    //   console.log("dans submit");
    //   // Vérifier si l'input image contient une image
    //   if (input.files.length > 0) {
    //     console.log("inf");
    //     // Afficher un message d'erreur dans le label de l'input image
    //     label.innerText = 'Veuillez supprimer l\'image avant de soumettre le formulaire';
    //     label.style.color = 'red';
    //     e.preventDefault(); // Empêcher la soumission du formulaire
    //   }
    // });
}