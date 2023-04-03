
import { createModal } from "./createModal/createModal.js";
import { fetchGetWorks } from "../../../fetch/fetch.js";

export let loginConnected=()=>{
    // Appeler la fonction createModal pour créer la modal de connexion réussie
    createModal();
    // Appeler la fonction fetchGet pour récupérer des données depuis l'API
    fetchGetWorks()

}
