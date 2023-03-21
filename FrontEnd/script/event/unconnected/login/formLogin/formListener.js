// La fonction formListener prend en entrée la fonction fetchLoginPost pour se connecter à l'API
export function formListener(fetchLoginPost) {
    
    // Récupérer le formulaire de connexion
    const form = document.querySelector("form");
    // Ajouter un événement de soumission du formulaire
    form.addEventListener("submit", (event) => {
        // Empêcher la page de se recharger à la soumission du formulaire
        event.preventDefault();
        // Afficher un message de connexion réussie dans la console
        console.log("submit informations connexion");
        // Récupérer les données du formulaire sous forme de FormData
        const formData = new FormData(form);
        // Convertir les données en un objet
        const data = Object.fromEntries(formData);
        // Appeler la fonction fetchLoginPost pour se connecter à l'API avec les données du formulaire
        fetchLoginPost(data)
    });
}
