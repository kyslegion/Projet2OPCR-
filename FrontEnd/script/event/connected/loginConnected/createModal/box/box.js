import { createHtmlPage } from "./createHtmlPage/createHtmlPage.js";
import { listener } from "../modalListener/listener.js";
export function box(fetchGet,tokenpassed) {
    let box=document.querySelector('.edit')
    box.addEventListener('click', () => {
        createHtmlPage().then(() => {
          listener();
        });
      });
}