// La fonction loginConnected affiche une modal de confirmation de connexion réussie et appelle la fonction fetchGet pour récupérer des données depuis l'API.
import { createModal } from "./createModal/createModal.js";
import { fetchGet } from "../../../fetch/fetchGet.js";

export let loginConnected=()=>{
    // Appeler la fonction createModal pour créer la modal de connexion réussie
    createModal();
    // Appeler la fonction fetchGet pour récupérer des données depuis l'API
    fetchGet();
}
