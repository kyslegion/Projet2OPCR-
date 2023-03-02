import { createModal } from "./createModal/createModal.js";
import { fetchGet } from "../../../fetch/fetchGet.js";
export let loginConnected=()=>{
    createModal();
    fetchGet();
}