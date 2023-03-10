import { addPhotoHtml } from "./addPhotoHtml/addPhotoHtml.js";
import { formEventListener } from "./formEventListener/formEventListener.js";
import { uploadInfo } from "./uploadInfo/uploadInfo.js";
export function addPhotoListener() {
    let add=document.querySelector('#addPhoto')
    add.addEventListener('click',(e)=>{
        e.preventDefault()
        addPhotoHtml()
        uploadInfo()
    })
}