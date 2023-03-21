
import { fetchLoginPost } from "../../../../fetch/post/login.js";
import { formListener } from "./formListener.js";

export function formLogin() {
    formListener(fetchLoginPost)
}
