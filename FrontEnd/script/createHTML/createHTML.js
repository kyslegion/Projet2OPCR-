
import { modalHTML,modal } from "./modalHTML/modalHTML.js";
import { fetchGet } from "../fetch/fetchGet.js";
import { tokenpassed } from "../../script/tokenpassed.js";
// import { modal } from "./modalHTML/modalHTML.js";
export let createHTML=()=>{
    console.log("je suis createhtml");
    modalHTML();
    modal(fetchGet,tokenpassed);
}