import { createHtmlPage } from "./createHtmlPage/createHtmlPage.js";
import { modalListener } from "../modalListener/modalListener.js";

import { closeModal } from "../closeModal/closeModal.js";
export function modal(fetchGet,tokenpassed) {
    let modal=document.querySelector('.edit')
    modal.addEventListener('click', (e) => {
      e.preventDefault()
      if (document.querySelector('#box_manager') === null) {
        console.log('ouverture modal');
        createHtmlPage().then(() => {
          modalListener();
          closeModal()
            let dark_filter=document.querySelector('#dark_filter')
            dark_filter.addEventListener('click',(e)=>{
              e.preventDefault()
            let box_manager=document.querySelector('#box_manager')
            box_manager.remove()
          })
        });
      }
     
    });
}