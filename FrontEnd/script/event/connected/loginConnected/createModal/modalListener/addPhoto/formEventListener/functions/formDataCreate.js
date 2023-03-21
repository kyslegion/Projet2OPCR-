
import { workPost } from "../../../../../../../../fetch/post/works.js";
import { validationForm } from "./validationForm.js";

// Définition d'une fonction "formDataCreate" qui crée un objet FormData avec les données du formulaire et le fichier sélectionné.
export function formDataCreate(form, file) {
  // Création d'un objet FormData à partir du formulaire.
  const formData = new FormData(form);
  
  // Suppression des anciennes données d'image, de titre et de catégorie.
  formData.delete('image');
  formData.delete('title');
  formData.delete('category');
  
  // Ajout du nouveau fichier d'image, du nouveau titre et de la nouvelle catégorie dans l'objet FormData.
  formData.append('image', file);
  formData.append('title', form.title.value);
  formData.append('category', form.category.value);
  
  // Validation du formulaire avec la fonction "validationForm".
  validationForm(formData);
  
  // Envoi de l'objet FormData à l'API avec la fonction "workPost".
  workPost(formData);
}
