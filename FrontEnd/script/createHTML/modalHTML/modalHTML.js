export let modalHTML=()=>{
    console.log("je suis modalhtml");
let html=document.querySelector('html')
let body=document.querySelector('body')
body.innerHTML=`
<body>
    <header class="connected" id="header">
        <div class="box">
          <span class="edit">
          <img src="./assets/icons/editor icon.png">
          Mode edition</span>
          <button >publier les changements</button>
        </div>
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
html.appendChild(body)
}


export function modal(fetchGet,tokenpassed) {
    console.log("je suis dans modal");
    let box=document.querySelector('.edit')
    // let fetching;
    
    box.addEventListener('click',()=>{
      // console.log(savedToken);
        console.log("click");
        fetchGet().then((données) => {
            // console.log(données,"ok");
            
      //       function createBoxModal(params) {
      //       // console.log("box cliqué !");
      //       let body=document.querySelector('body')

      //       let dark_filter=document.createElement('div')
      //       let container=document.createElement('div')
      //       let content=document.createElement('div')
      //       let ul=document.createElement('ul')

      //       dark_filter.id="dark_filter"
      //       container.id="container"
      //       content.id="content"
      //       ul.className='box_image'

      //           données.forEach(element => {
      //               let li=document.createElement('li')
      //               let img = document.createElement('img');
      //               img.src=element.imageUrl
      //               li.className="mini_img"
      //               li.appendChild(img)
      //               ul.appendChild(li)
      //           });
                

      //           let titre=document.createElement('div')
      //           titre.className="titre"
      //           titre.innerHTML="Galerie photo"
      //           let croix=document.createElement('div')
      //           croix.className="croix"
      //           croix.innerHTML="X"
      //           titre.appendChild(croix)

      //       let form=document.createElement('form')
      //       form.enctype = 'multipart/form-data';
      //       // form.innerHTML=`<label for="image-upload" class="add_img">Ajouter une photo</label>
      //       // <input id="image-upload" type="file" name="image" accept="image/*" style="display:none;" />
      //       // <button type="submit">Télécharger</button>`;
      //       form.innerHTML=`<label for="image-upload" class="add_img">Ajouter une photo</label>
      //       <input id="image-upload" type="file" name="image" accept="image/*" style="display:none;" />
      //       <button type="submit">Télécharger</button>`;
      //       form.addEventListener('submit',()=>{
      //           event.preventDefault();

      //           const formData = new FormData(form);
      //           const data = Object.fromEntries(formData);
      //           console.log(data);
      //           fetch("http://localhost:5678/", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json",
      //     'Authorization': `gwEtS=KfKfR^zxJP83ULiw`,
      //   },
      // })
      //   .then((response) => {
      //     switch (response.status) {
      //       case 200:
      //         console.log("200");
      //         break;
      //       case 404:
      //         console.log("404");
      //         break;
            
      //       default:
      //         console.log("error");
      //         break;
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
                
                
                
                
                
      //       })
      //       content.appendChild(titre)
      //       content.appendChild(ul)
      //       content.appendChild(form)
      //       container.appendChild(content)
      //       body.appendChild(container)
      //       body.appendChild(dark_filter)
    
    
      //       }
            // createBoxModal()
            tokenpassed()
        });
        
        
        

    })
}
