export let createHtml=()=>{
    let html=document.querySelector('html')
    let body=document.querySelector('body')

    // Création d'un élément HTML de type div pour la fenêtre modale, avec du contenu HTML
    let modal=document.createElement('div')
    modal.innerHTML=`<div class="modal">
    <span class="edit">
        <div id='iconModal'>
            <img src="../../../../../../assets/icons/Vector(2).png">
            <img src="../../../../../../assets/icons/Vector(3).png">
        </div>
        <span id="textModal">
            Mode edition
        </span>
    </span >
    <button id="editChangements">publier les changements</button>
  </div>`
  // Remplacement du contenu du corps du document avec du contenu HTML
    body.innerHTML=`
<body>
    <header class="connected" id="header">
        
        <div class="container_nav">
            <h1>Sophie Bluel <span>Architecte d'inteérieur</span></h1>
            <nav class="nav">
                  <ul>
                    <li id="projets">projets</li>
                    <li id="contact">contact</li>
                    <li id="login">login</li>
                    <li><img src="./assets/icons/instagram.png" alt="Instagram"></li>
                  </ul>
            </nav>
        </div>
    </header>
    <main id="main">
        <section id="introduction">
              <figure>
                <img src="./assets/images/sophie-bluel.png" alt="">
              </figure>
              <article>
                  <h2>Designer d'espace</h2>
                  <p>Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison finale du chantier.</p>
                  <p>Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du chantier sera assuré dans le souci du détail, le respect du planning et du budget.</p>
                  <p>En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG, décorateur(trice)</p>
              </article>
        </section>
        <section id="portfolio">
              <h2>Mes Projets</h2>
              <ul class="filter">
                <li id="all">Tous</li>
                <li id="objects">Objets</li>
                <li id="flats">Appartements</li>
                <li id="hotels_and_restaurants">Hôtels & restaurants</li>
              </ul>
              <div class="gallery"></div>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>Vous avez un projet ? Discutons-en !</p>
            <form action="/example" method="POST">
                <label for="name">Nom</label>
                <input type="text" name="name" id="name">
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <input type="submit" value="Envoyer">
            </form>
        </section>
    </main>

    <footer id="footer">
        <nav>
            <ul>
                <li>Mentions Légales</li>
            </ul>
        </nav>
    </footer>
    </body>`
    html.appendChild(modal)
    html.appendChild(body)
}