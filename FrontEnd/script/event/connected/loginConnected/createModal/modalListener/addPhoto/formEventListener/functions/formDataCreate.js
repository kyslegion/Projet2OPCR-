import { workPost } from "../../../../../../../../fetch/post/works.js";
import { validationForm } from "./validationForm.js";

export function formDataCreate(form,file){
    const formData = new FormData(form);

    formData.delete('image');
  formData.delete('title');
  formData.delete('category');
  formData.append('image', file);
  formData.append('title', form.title.value);
  formData.append('category', form.category.value);

    // console.log(formData,"dans formDataCreate");
    // console.log(file,"dans formDataCreate");
    // formData.append('image', file);
    // console.log(formData,"ajout image ");
    // console.log(uploadedFile,"uploadfike");
console.log(formData,"form test");

    workPost(formData)

  }