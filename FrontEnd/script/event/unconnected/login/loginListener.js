export function loginListener(createLoginHtml, formLogin) {
    // Sélectionner l'élément HTML qui représente le bouton de connexion
    let login = document.querySelector('#login');

    // Ajouter un écouteur d'événement sur le bouton de connexion
    login.addEventListener('click', (e) => {
        // Empêcher le comportement par défaut du bouton
        e.preventDefault();

        // Appeler la fonction createLoginHtml pour créer le code HTML pour la fenêtre de connexion
        createLoginHtml();

        // Appeler la fonction formLogin pour gérer la soumission du formulaire de connexion
        formLogin();
    });
}
