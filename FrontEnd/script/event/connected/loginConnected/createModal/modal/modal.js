import { createHtmlPage } from "./createHtmlPage/createHtmlPage.js";
import { listener } from "../modalListener/listener.js";

import { closeModal } from "../closeModal/closeModal.js";
export function modal(fetchGet,tokenpassed) {
    let modal=document.querySelector('.edit')
    modal.addEventListener('click', () => {
      createHtmlPage().then(() => {
        listener();
        closeModal()
      });
    });
}