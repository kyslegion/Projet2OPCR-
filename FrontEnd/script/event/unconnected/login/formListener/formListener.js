
import { fetchLoginPost } from "../../../../fetch/post/login.js";
export function formListener() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        fetchLoginPost(data)
    });

}
