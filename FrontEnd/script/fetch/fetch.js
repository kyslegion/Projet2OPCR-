import { functionDelete } from "./fonctions/functionDelete.js";
import { functionGet } from "./fonctions/functionGet.js";
import { functionPostLogin } from "./fonctions/functionPostLogin.js";
import { functionPost } from "./fonctions/functionPost.js";


export function fetchDelete(parentId,parentElement) {
    functionDelete(parentId,parentElement)
}
export function fetchGetWorks() {
    return functionGet()
}
export function fetchLoginPost() {
    functionPostLogin()
}
export function workPost() {
    functionPost()
}
