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
      console.log(file);
  
      if (file) {
        const reader = new FileReader();
  
        reader.addEventListener('load', (e) => {
          e.preventDefault()
          const image = new Image();
          image.src = reader.result;
          preview.innerHTML = '';
          preview.appendChild(image);

          formEventListener(file)
        });
  
        reader.readAsDataURL(file);
      }
    });
}