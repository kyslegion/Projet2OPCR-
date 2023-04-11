

const param = {
  openModal,
  initProjectOpenModal,
  GET,
  closeModalWithCross,
  closeModalWithDarkFilter,
  addPhotoListener,
  addProjectFormHtml,
  btnclose,
  btnprevious,
  handleImageUpload,
  handleForm,
  validationForm,
  handleDeleteButtonClick,
  clickEventOnModal,
  makeHtmlModal,
  loginListener,
  loginForm,
  loginHtml,
  Button,
  Filter,
  Initialisation,
  DELETE,
  POSTLOGIN,
  POST
};
//fetch
function GET(){
    const API_URL = "http://localhost:5678/api/works";

    return fetch(API_URL, {
      method: "GET",
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        console.error(error);
    });

}
function POST(formData,param) {
    const token = localStorage.getItem('token');
    const tokenObj = JSON.parse(token);
    const headers = { 'Authorization': 'Bearer ' + tokenObj.token };
    
  
    fetch("http://localhost:5678/api/works", {
      method: "POST",
      body: formData,
      headers: {
        ...headers
      }
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("L'envoi du formulaire a réussi.");
          return response.json();
        } else if (response.status === 401) {
          console.error("Erreur d'authentification. Veuillez vous reconnecter.");
          throw new Error("Unauthorized");
        } else {
          console.error(`Erreur lors de l'envoi du formulaire : ${response.status}`);
          throw new Error(`Error ${response.status}`);
        }
      })
      .then((data) => {
        function etape1(){
          console.log("Données reçues du serveur :", data);
          if (document.getElementById("box_manager")) {
            let box_manager = document.getElementById("box_manager");
            box_manager.remove();
        }
          
        let body = document.querySelector("body");
        let box_manager = document.createElement("box_manager");
        let container = document.createElement("div");
        let content = document.createElement("div");
        let closeBtn = document.createElement("div");
        let dark_filter = document.createElement("div");
        let titre = document.createElement("div");
        let img = document.createElement('img');
        img.id="closebtnmodal"
        img.src = '../assets/icons/Close.png';
  
        box_manager.id='box_manager';
        container.id = "container";
        content.id = "content";
        dark_filter.id = "dark_filter";
        titre.className = "titre";
        closeBtn.className = "closeBtn";

        titre.innerHTML = "Galerie photo";
        titre.appendChild(img);
        titre.appendChild(closeBtn);

        const addPhotoButton = document.createElement("button");
        addPhotoButton.id = "addPhoto";
        addPhotoButton.textContent = "Ajouter une photo";
        const deleteGalleryButton = document.createElement("button");
        deleteGalleryButton.id = "deleteGallery";
        deleteGalleryButton.textContent = "Supprimer la galerie";
        deleteGalleryButton.addEventListener("click", () => {
      
      
      const gallery = document.querySelector("#content");
      if (gallery) {
        const children = gallery.children;
        for (let i = children.length - 1; i > 9; i--) {
          const parentId = parseInt(children[i].id, "id");
          const parentElement = children[i];
          DELETEALL(parentId, parentElement, GET, i);
        }
      }
    });
  
    let addProject = document.createElement("div");
    addProject.id = "addProject";
    addProject.appendChild(addPhotoButton);
    addProject.appendChild(deleteGalleryButton);
  
    container.appendChild(titre);
    container.appendChild(content);
    container.appendChild(addProject);
    box_manager.appendChild(dark_filter);
    box_manager.appendChild(container);
    body.appendChild(box_manager);

        }
        function etape2() {
          const content = document.querySelector('#content');
          const ul = document.createElement("ul");
          ul.className = "box_image";
        
          GET().then((data) => {
            data.forEach((element) => {
              const li = document.createElement("li");
              const img = document.createElement("img");
              const img2 = document.createElement("img");
              const deletefile = document.createElement("input");
              
              deletefile.type = "button";
              deletefile.className = "deletefile";
              deletefile.value = "Effacer";
              deletefile.addEventListener('click', (event) => {
                const parentId = parseInt(event.target.parentElement.id, "id");
                const parentElement = event.target.parentElement;
                DELETE(parentId, parentElement, GET)
              });
              
              img2.id = "deletefileimg";
              img2.src = '../assets/icons/Deletebtn.png';
              img2.addEventListener('click', (event) => {
                const deletefileButton = event.target.parentElement.querySelector('.deletefile');
                deletefileButton.click();
              });
                        
              li.setAttribute('id', element.id);
              img.src = element.imageUrl;
              li.className = "mini_img";
              li.appendChild(img2);
              li.appendChild(deletefile);
              li.appendChild(img);
              ul.appendChild(li);
            });
        
            let allSet = new Set(data);
            let gallery = document.querySelector('.gallery');
              
            while (gallery.firstChild) {
              gallery.removeChild(gallery.firstChild);
            }
              
            allSet.forEach(element => {
              let figure = document.createElement('figure');
              let img = document.createElement('img');
              img.src = element.imageUrl;
              let figcaption = document.createElement('figcaption');
              figcaption.innerHTML = element.title;
              figure.appendChild(img);
              figure.appendChild(figcaption);
              gallery.appendChild(figure);
            });
          });
        
          content.appendChild(ul); 
        }
        function etape3(){
          const closeBtn = document.querySelector('#closebtnmodal');
          closeBtn.addEventListener('click', () => {
              const box_manager = document.querySelector('#box_manager');
              box_manager.remove();
            });
          
        }
        function etape4(){
          let dark_filter = document.querySelector('#dark_filter');
          dark_filter.addEventListener('click', (e) => {
              e.preventDefault();
              let box_manager = document.querySelector('#box_manager');
              box_manager.remove();
          });
      
        }
        function etape5() {
          
          let addPhoto = document.querySelector('#addPhoto');
          addPhoto.addEventListener('click',()=>{
            function func1() {
              let box_manager = document.querySelector('#box_manager');
              box_manager.remove();
              let container = document.querySelector('#container');
              container.innerHTML = `
                <form id="form">
                  <div id='containerBtnOptions'>
                    <button id="btnprevious" type="button">
                      <img src="../assets/icons/back-svgrepo-com 1.png">
                    </button>
                    <button id="btnclose" type="button">
                      <img src="../assets/icons/close-svgrepo-com 1.png">
                    </button>
                  </div>
                  <h2 id="formtitle">Ajout photo</h2>
                  <div id="image-preview">
                    <img id="preview" src="../assets/icons/preview.png" />
                    <label for="image">
                      <div id="graybtn">
                        <span>+Ajouter photo</span>
                      </div>
                    </label>
                    <input type="file" id="image-upload" name="image" required />
                    <span id="graybtntext">jpg, png : 4mo max</span>
                    <br /><br />
                  </div>
                  <label class="formtitle2" for="titre">Titre:</label>
                  <input type="text" id="title" name="title" required /><br /><br />
                  <label class="formtitle2" for="categoryId">Catégorie:</label>
                  <select id="category" name="category" required>
                    <option value="" selected></option>
                    <option value="1">Objets</option>
                    <option value="2">Appartements</option>
                    <option value="3">Hôtels & restaurants</option>
                  </select><br /><br />
                  <input type="submit" value="Valider" required />
                </form>
              `;
            }
            function func2() {
              const label = document.querySelector('label[for="image"]');
              const input = document.querySelector('#image-upload');
              const preview = document.querySelector('#image-preview');
          
              label.addEventListener('click', (e) => {
                  e.preventDefault();
                  input.click();
              });
          
              input.addEventListener('change', (e) => {
                  e.preventDefault();
                  const file = input.files[0];
          
                  if (file) {
                      const reader = new FileReader();
          
                      reader.addEventListener('load', (e) => {
                          e.preventDefault();
                          const image = new Image();
                          image.src = reader.result;
          
                          // Appliquer les styles CSS
                          image.style.width = '100%';
                          image.style.height = '100%';
          
                          preview.innerHTML = '';
                          preview.appendChild(image);
                      });
          
                      reader.readAsDataURL(file);
                  }
              });
          }
          
            function func3(param) {
              const form = document.querySelector('#form');
              const input = document.querySelector('#image-upload');
              let file;
            
              input.addEventListener('change', (e) => {
                e.preventDefault();
                file = input.files[0];
              });
            
              form.addEventListener('submit', (event) => {
                event.preventDefault();
            
                if (!file) {
                  return;
                }
            
                const formData = new FormData(form);
                formData.delete('image');
                formData.delete('title');
                formData.delete('category');
                formData.append('image', file);
                formData.append('title', form.title.value);
                formData.append('category', form.category.value);
            
                if (validationForm(formData)) {
                  POST(formData,param);
                }
              });
            }
            func1()
            func2()
            func3()

          })
        
        }
        etape1()
        etape2()
        etape3()
        etape4()
        etape5()
      })
      .catch((error) => {
        console.error(error);
      });
}  
function POSTLOGIN(data,Initialisation,GET,makeHtmlModal,clickEventOnModal,param){
  
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    switch (response.status) {
      case 200:
        console.log("Connexion réussie");
        
        return response.json();
        
        break;
      case 404:
        console.log("Identifiant ou mot de passe incorrect");
        const form = document.getElementById("form");
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Identifiant ou mot de passe incorrect";
        errorMessage.style.color = "red";
        form.appendChild(errorMessage);
        break;
      default:
        console.log("Erreur, statut non pris en charge");
        break;
      }
    })
    .then(data => {
      console.log("creation de token");
      localStorage.setItem('token', JSON.stringify(data));
      makeHtmlModal(param,loginListener)
      Initialisation(GET)
      let filter = document.querySelector('.filter');
      if (filter) {
        filter.remove();
      }
      clickEventOnModal(param)
    })
    .catch((error) => {
      console.error(error);
    });
}
function DELETE(parentId, parentElement, GET) {
    const API_URL = "http://localhost:5678/api/works";
    const token = localStorage.getItem('token');
    const tokenObj = JSON.parse(token);
    const projects = localStorage.getItem('projects');
    const headers = { 
        'Authorization': 'Bearer ' + tokenObj.token,
        "Content-Type": "multipart/form-data",
    };

    fetch(`${API_URL}/${parentId}`, {
        method: "DELETE",
        headers: headers
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Erreur lors de la suppression.");
        }
        parentElement.remove();
        console.log("L'élément a été supprimé avec succès.");
        console.log(response);
        GET().then((data) => {
          let allSet = new Set(data);
          let gallery = document.querySelector('.gallery');
          while (gallery.firstChild) {
              gallery.removeChild(gallery.firstChild);
          }
          allSet.forEach(element => {
              let figure = document.createElement('figure');
              let img = document.createElement('img');
              img.src = element.imageUrl;
              let figcaption = document.createElement('figcaption');
              figcaption.innerHTML = element.title;
              figure.appendChild(img);
              figure.appendChild(figcaption);
              gallery.appendChild(figure);
          });
        })
        
    })
    .catch((error) => {
        console.error(error);
    });
}
function DELETEALL(parentId, parentElement, GET, index) {
  const API_URL = "http://localhost:5678/api/works";
  const token = localStorage.getItem('token');
  const tokenObj = JSON.parse(token);
  const projects = localStorage.getItem('projects');
  const headers = {
      'Authorization': 'Bearer ' + tokenObj.token,
      "Content-Type": "multipart/form-data",
  };

  if (index > 9) {
      fetch(`${API_URL}/${parentId}`, {
          method: "DELETE",
          headers: headers
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error("Erreur lors de la suppression.");
          }

          parentElement.remove();

          console.log("L'élément a été supprimé avec succès.");
          console.log(response);

          GET().then((data) => {
              let allSet = new Set(data);
              let gallery = document.querySelector('.gallery');

              while (gallery.firstChild) {
                  gallery.removeChild(gallery.firstChild);
              }

              allSet.forEach(element => {
                  let figure = document.createElement('figure');
                  let img = document.createElement('img');
                  img.src = element.imageUrl;
                  let figcaption = document.createElement('figcaption');
                  figcaption.innerHTML = element.title;
                  figure.appendChild(img);
                  figure.appendChild(figcaption);
                  gallery.appendChild(figure);
              });
          })

      })
      .catch((error) => {
          console.error(error);
      });
  }
}

//Initialisation projects
function Initialisation(GET) {
  GET().then((data) => {
      let allSet = new Set(data);
      let gallery = document.querySelector('.gallery');
      while (gallery.firstChild) {
          gallery.removeChild(gallery.firstChild);
      }
      allSet.forEach(element => {
          let figure = document.createElement('figure');
          let img = document.createElement('img');
          img.src = element.imageUrl;
          let figcaption = document.createElement('figcaption');
          figcaption.innerHTML = element.title;
          figure.appendChild(img);
          figure.appendChild(figcaption);
          gallery.appendChild(figure);
      });
      const all = document.getElementById('all');
      if (all>0) {
        all.classList.add("selected");
      }
      else{}
      
  });
}
function Filter(GET, filter) {
  GET().then((data) => {
      let allSet = new Set(data);
      let newSet = new Set();
      if (filter !== "all") {
          allSet.forEach(element => {
              if (element.category.name == filter) {
                  newSet.add(element);
              }
          });
          allSet = newSet;
      }

      let gallery = document.querySelector('.gallery');
      while (gallery.firstChild) {
          gallery.removeChild(gallery.firstChild);
      }

      allSet.forEach(element => {
          let figure = document.createElement('figure');
          let img = document.createElement('img');
          img.src = element.imageUrl;
          let figcaption = document.createElement('figcaption');
          figcaption.innerHTML = element.title;
          figure.appendChild(img);
          figure.appendChild(figcaption);
          gallery.appendChild(figure);
      });
  });
}
function Button(Filter) {
  const all = document.getElementById('all');
  const objects = document.getElementById('objects');
  const flats = document.getElementById('flats');
  const hotels_and_restaurants = document.getElementById('hotels_and_restaurants');

  function handleFilterClick(event) {
      all.classList.remove("selected");
      objects.classList.remove("selected");
      flats.classList.remove("selected");
      hotels_and_restaurants.classList.remove("selected");
      event.target.classList.add("selected");
      
      let filter;
      switch (event.target.id) {
          case "all":
              filter = "all";
              break;
          case "objects":
              filter = "Objets";
              break;
          case "flats":
              filter = "Appartements";
              break;
          case "hotels_and_restaurants":
              filter = "Hotels & restaurants";
              break;
      }
      Filter(GET, filter);
  }

  all.addEventListener('click', handleFilterClick);
  objects.addEventListener('click', handleFilterClick);
  flats.addEventListener('click', handleFilterClick);
  hotels_and_restaurants.addEventListener('click', handleFilterClick);
}

//connexion
function loginHtml(){
    let main=document.querySelector('main')
    main.innerHTML=`
    <h2 class="h2">Log in</h2>
    <form id="formLogin" method="POST">
      <label for="email">
      <span id="LabelEmail"> Email</span>
     
        <input type="email" id="email" name="email">
      </label>
      
      <label for="password">
      <span id="LabelPassword">Mot de passe</span>
      
        <input type="password" id="password" name="password">
      </label>
      
      <input id="submitLogin" type="submit" value="Se connecter">
      <a href="#">Mot de passe oublié?</a>
    </form>`
}
function loginForm(POSTLOGIN, makeHtmlModal) {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    let formIsValid = true;
    let errorMessage = '';

    formData.forEach((value, key) => {
      if (!value) {
        formIsValid = false;
        errorMessage = 'Veuillez remplir tous les champs.';
      }
    });

    const existingErrorDiv = form.querySelector('.error-message');

    if (!formIsValid) {
      if (!existingErrorDiv) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = errorMessage;
        form.appendChild(errorDiv);
        errorDiv.classList.add('error-message');
      }
    } else {
      if (existingErrorDiv) {
        existingErrorDiv.remove();
      }

      POSTLOGIN(data, Initialisation, GET, makeHtmlModal, clickEventOnModal, param);
    }
  });
}
function loginListener(loginHtml, loginForm,POSTLOGIN,makeHtmlModal,clickEventOnModal) {
  let login = document.querySelector('#login');
  let projectsHome = document.querySelector('#projectsHome');
  let home = document.querySelector('#home');

  const navElements = document.querySelectorAll('nav li'); 


  login.addEventListener('click', (e) => {
    projectsHome.style.fontWeight = 'normal';
    e.target.style.fontWeight = 'bold';
      e.preventDefault();
      loginHtml();
      loginForm(POSTLOGIN,makeHtmlModal,clickEventOnModal);
  });
  projectsHome.addEventListener('click', (e) => {
    login.style.fontWeight = 'normal';
    e.target.style.fontWeight = 'bold';
      e.preventDefault();
      homeHtml()
      Initialisation(GET)
      Button(Filter)
      loginListener(loginHtml, loginForm,POSTLOGIN,makeHtmlModal)
  });
  home.addEventListener('click', (e) => {
    projectsHome.style.fontWeight = 'normal';
    login.style.fontWeight = 'normal';
      e.preventDefault();
      homeHtml()
      Initialisation(GET)
      Button(Filter)
      loginListener(loginHtml, loginForm,POSTLOGIN,makeHtmlModal)
  });
  function homeHtml() {
    let main = document.querySelector('main');

    main.innerHTML=`<main>
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
      <h2 id="titleProject">Mes Projets
        <span class="modifier hide">
          Modifier</span>
      </h2>
      <ul class="filter">
        <li id="all" class="selected">Tous</li>
        <li id="objects">Objets</li>
        <li id="flats">Appartements</li>
        <li id="hotels_and_restaurants">Hôtels &amp; restaurants</li>
      </ul>
      <div class="gallery"><figure><img src="http://localhost:5678/images/abajour-tahina1651286843956.png"><figcaption>Abajour Tahina</figcaption></figure><figure><img src="http://localhost:5678/images/appartement-paris-v1651287270508.png"><figcaption>Appartement Paris V</figcaption></figure><figure><img src="http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png"><figcaption>Restaurant Sushisen - Londres</figcaption></figure><figure><img src="http://localhost:5678/images/la-balisiere1651287350102.png"><figcaption>Villa “La Balisiere” - Port Louis</figcaption></figure><figure><img src="http://localhost:5678/images/structures-thermopolis1651287380258.png"><figcaption>Structures Thermopolis</figcaption></figure><figure><img src="http://localhost:5678/images/appartement-paris-x1651287435459.png"><figcaption>Appartement Paris X</figcaption></figure><figure><img src="http://localhost:5678/images/le-coteau-cassis1651287469876.png"><figcaption>Pavillon “Le coteau” - Cassis</figcaption></figure><figure><img src="http://localhost:5678/images/villa-ferneze1651287511604.png"><figcaption>Villa Ferneze - Isola d’Elba</figcaption></figure><figure><img src="http://localhost:5678/images/appartement-paris-xviii1651287541053.png"><figcaption>Appartement Paris XVIII</figcaption></figure><figure><img src="http://localhost:5678/images/bar-lullaby-paris1651287567130.png"><figcaption>Bar “Lullaby” - Paris</figcaption></figure></div>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Vous avez un projet ? Discutons-en !</p>
      <form action="#" method="post">
        <label for="name">Nom</label>
        <input id="nameInput" type="text" name="name">
        <label for="email">Email</label>
        <input id="emailInput" type="email" name="email">
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <input id="submitContact" type="submit" value="Envoyer">
      </form>
    </section>
  </main>`;
  
    
  }
}
function loginListener2(loginHtml, loginForm, POSTLOGIN, makeHtmlModal, clickEventOnModal, param) {
  loginHtml();
  loginForm(POSTLOGIN, makeHtmlModal, clickEventOnModal);
}

//Modal
function makeHtmlModal(param,loginListener) {
  let html = document.querySelector('html');
  let body = document.querySelector('body');

  let filter = document.querySelector('.filter');
  if (filter) {
    filter.remove();
  }
  let existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  let modal = document.createElement('div');
  modal.innerHTML = `
    <div class="modal">
      <span class="modal">
        <div id='iconModal'>
          <img src="../assets/icons/Vector(2).png">
          <img src="../assets/icons/Vector(3).png">
        </div>
        <span id="textModal">
          Mode edition
        </span>
      </span>
      <button id="editChangements">publier les changements</button>
    </div>
  `;
  body.innerHTML=`
  <body>
      <header class="connected" id="header">
          
          <div class="container_nav">
              <h1>Sophie Bluel <span>Architecte d'inteérieur</span></h1>
              <nav class="nav">
                    <ul>
                      <li id="projets">projets</li>
                      <li id="contact">contact</li>
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
            <h2 id="titleProject">Mes Projets
              <span class="modifier hide">
              <img src="../assets/icons/Vector(4).png">
                <img src="../assets/icons/Vector(5).png">
              Modifier</span>
            </h2>
            <ul class="filter">
              <li id="all">Tous</li>
              <li id="objects">Objets</li>
              <li id="flats">Appartements</li>
              <li id="hotels_and_restaurants">Hôtels & restaurants</li>
            </ul>
            <div class="gallery">
            </div>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <p>Vous avez un projet ? Discutons-en !</p>
            <form action="#" method="post">
              <label for="name">Nom</label>
              <input id="nameInput" type="text" name="name" id="name">
              <label for="email">Email</label>
              <input id="emailInput" type="email" name="email" id="email">
              <label for="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
              <input  id="submitContact" type="submit" value="Envoyer">
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
      </body>`;

  let login = document.createElement('li');
  login.id = "login";
  login.textContent = "login";

  let navList = body.querySelector('.nav ul');
  let positionToInsert = 2; 
  navList.insertBefore(login, navList.children[positionToInsert]);

  let modifier = document.querySelector('.modifier')
  modifier.className = "modifier";
  html.appendChild(modal);

  html.appendChild(body);

  login.addEventListener('click', () => {
    login.style.fontWeight = 'bold';
    loginListener2(loginHtml, loginForm, POSTLOGIN, makeHtmlModal, clickEventOnModal, param);
  });
}
function clickEventOnModal(param){
let modal = document.querySelector('.modal');
  let modifier = document.querySelector('.modifier');

  modal.addEventListener('click', (e) => {
    e.preventDefault();

    if (document.querySelector('#box_manager') === null) {
      param.openModal();
      param.initProjectOpenModal(GET)
      param.closeModalWithCross()
      param.closeModalWithDarkFilter()
      param.addPhotoListener(addProjectFormHtml,btnclose,btnprevious,handleImageUpload,handleForm,validationForm)
    }
  });

  modifier.addEventListener('click', (e) => {
    e.preventDefault();

    if (document.querySelector('#box_manager') === null) {
      param.openModal();
      param.initProjectOpenModal(GET)
      param.closeModalWithCross()
      param.closeModalWithDarkFilter()
      param.addPhotoListener(addProjectFormHtml,btnclose,btnprevious,handleImageUpload,handleForm,validationForm)
    }
  });
}

function openModal(){
    let body = document.querySelector("body");
    let box_manager = document.createElement("box_manager");
    let container = document.createElement("div");
    let content = document.createElement("div");
    let closeBtn = document.createElement("div");
    let dark_filter = document.createElement("div");
    let titre = document.createElement("div");
    let img = document.createElement('img');
    img.id="closebtnmodal"
    img.src = '../assets/icons/Close.png';
  
    box_manager.id='box_manager';
    container.id = "container";
    content.id = "content";
    dark_filter.id = "dark_filter";
    titre.className = "titre";
    closeBtn.className = "closeBtn";
  
    titre.innerHTML = "Galerie photo";
    titre.appendChild(img);
    titre.appendChild(closeBtn);
  
    const addPhotoButton = document.createElement("button");
    addPhotoButton.id = "addPhoto";
    addPhotoButton.textContent = "Ajouter une photo";
  
    const deleteGalleryButton = document.createElement("button");
    deleteGalleryButton.id = "deleteGallery";
    deleteGalleryButton.textContent = "Supprimer la galerie";
    deleteGalleryButton.addEventListener("click", () => {
      
      
      const gallery = document.querySelector("#content");
      if (gallery) {
        const children = gallery.children[0].children;
        for (let i = children.length - 1; i > 9; i--) {
          const parentId = parseInt(children[i].id, "id");
          const parentElement = children[i];
          DELETEALL(parentId, parentElement, GET, i);
        }
      }
    });
  
    let addProject = document.createElement("div");
    addProject.id = "addProject";
    addProject.appendChild(addPhotoButton);
    addProject.appendChild(deleteGalleryButton);
  
    container.appendChild(titre);
    container.appendChild(content);
    container.appendChild(addProject);
    box_manager.appendChild(dark_filter);
    box_manager.appendChild(container);
    body.appendChild(box_manager);

}
function initProjectOpenModal(GET){
  const content = document.querySelector('#content');
  const ul = document.createElement("ul");
  ul.className = "box_image";
  GET().then((data) => {
      data.forEach((element) => {
          const li = document.createElement("li");
          const img = document.createElement("img");
          const img2 = document.createElement("img");
          const deletefile = document.createElement("input");

          deletefile.type = "button";
          deletefile.className = "deletefile";
          deletefile.value = "Effacer";
          deletefile.addEventListener('click', (event) => {
              const parentId = parseInt(event.target.parentElement.id, "id");
              const parentElement = event.target.parentElement;
              DELETE(parentId, parentElement, GET)
          });

          img2.id = "deletefileimg";
          img2.src = '../assets/icons/Deletebtn.png';
          img2.addEventListener('click', (event) => {
              const deletefileButton = event.target.parentElement.querySelector('.deletefile');
              deletefileButton.click();
          });
          
          li.setAttribute('id', element.id);
          img.src = element.imageUrl;
          li.className = "mini_img";
          li.appendChild(img2);
          li.appendChild(deletefile);
          li.appendChild(img);
          ul.appendChild(li);
      });
  });
  content.appendChild(ul);   
}
function handleDeleteButtonClick(event){
    const parentId = parseInt(event.target.parentElement.id, "id");
    const parentElement = event.target.parentElement;
    DELETE(parentId, parentElement, GET)
}  
function closeModalWithCross(){
    const closeBtn = document.querySelector('#closebtnmodal');
    closeBtn.addEventListener('click', () => {
        const box_manager = document.querySelector('#box_manager');
        box_manager.remove();
      });
    
}
function closeModalWithDarkFilter(){
    let dark_filter = document.querySelector('#dark_filter');
    dark_filter.addEventListener('click', (e) => {
        e.preventDefault();
        let box_manager = document.querySelector('#box_manager');
        box_manager.remove();
    });

}
function addPhotoListener(addProjectFormHtml, btnclose, btnprevious, handleImageUpload, handleForm, validationForm,param) {
  let addPhoto = document.querySelector('#addPhoto');

  if (!addPhoto) {
    createAddPhoto(initProjectOpenModal, GET, closeModalWithCross, closeModalWithDarkFilter, addProjectFormHtml, btnclose, btnprevious, handleImageUpload, handleForm, validationForm);
    addPhoto = document.querySelector('#addPhoto');
    console.log("here");
    console.log(addPhoto);
    addPhoto.addEventListener('click', () => {
      console.log("click");
      addProjectFormHtml();
      btnclose();
      btnprevious(addPhotoListener, addProjectFormHtml, btnclose, btnprevious, handleImageUpload, handleForm, validationForm);
      handleImageUpload();
      handleForm();
      validationForm()
    });
  }

  if (addPhoto) {
    addPhoto.addEventListener('click', (e) => {
      e.preventDefault();
      addProjectFormHtml();
      btnclose();
      btnprevious(addPhotoListener, addProjectFormHtml, btnclose, btnprevious, handleImageUpload, handleForm, validationForm);
      handleImageUpload();
      handleForm(param);
    });
  } else {
    console.error("L'élément #addPhoto est introuvable.");
  }
}
function createAddPhoto(initProjectOpenModal, GET, closeModalWithCross, closeModalWithDarkFilter, addProjectFormHtml, btnclose, btnprevious, handleImageUpload, handleForm, validationForm,param) {
  openModal();
  initProjectOpenModal(GET);
  closeModalWithCross();
  closeModalWithDarkFilter();
  addPhotoListener(addProjectFormHtml, btnclose, btnprevious, handleImageUpload, handleForm, validationForm,param);
}
function addProjectFormHtml() {
    let container = document.querySelector('#container');
    container.innerHTML = `
      <form id="form">
        <div id='containerBtnOptions'>
          <button id="btnprevious" type="button">
            <img src="../assets/icons/back-svgrepo-com 1.png">
          </button>
          <button id="btnclose" type="button">
            <img src="../assets/icons/close-svgrepo-com 1.png">
          </button>
        </div>
        <h2 id="formtitle">Ajout photo</h2>
        <div id="image-preview">
          <img id="preview" src="../assets/icons/preview.png" />
          <label for="image">
            <div id="graybtn">
              <span>+Ajouter photo</span>
            </div>
          </label>
          <input type="file" id="image-upload" name="image" required />
          <span id="graybtntext">jpg, png : 4mo max</span>
          <br /><br />
        </div>
        <label class="formtitle2" for="titre">Titre:</label>
        <input type="text" id="title" name="title" required /><br /><br />
        <label class="formtitle2" for="categoryId">Catégorie:</label>
        <select id="category" name="category" required>
          <option value="" selected></option>
          <option value="1">Objets</option>
          <option value="2">Appartements</option>
          <option value="3">Hôtels & restaurants</option>
        </select><br /><br />
        <input type="submit" value="Valider" required />
      </form>
    `;
}
function btnclose(){
  let btnclose=document.querySelector('#btnclose')
  btnclose.addEventListener('click',()=>{
    const box_manager = document.querySelector('#box_manager');
    box_manager.remove();
  })
}
function btnprevious(testCallback, addProjectFormHtml, btnclose, btnprevious, handleImageUpload, handleForm, validationForm){
  let btnpreviousElem = document.querySelector('#btnprevious');
  btnpreviousElem.addEventListener('click', () => {
    if (document.querySelector('#box_manager') !== null) {
      const box_manager = document.querySelector('#box_manager');
      box_manager.remove();
      testCallback(addProjectFormHtml, btnclose, btnprevious, handleImageUpload, handleForm, validationForm);
    }
  });
}
function handleImageUpload() {
  const label = document.querySelector('label[for="image"]');
  const input = document.querySelector('#image-upload');
  const preview = document.querySelector('#image-preview');

  input.addEventListener('invalid', (e) => {
    console.log('L\'attribut required n\'est pas satisfait.');
  });

  label.addEventListener('click', (e) => {
    e.preventDefault();
    input.click();
  });

  input.addEventListener('change', (e) => {
    e.preventDefault();
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', (e) => {
        e.preventDefault();
        const image = new Image();
        image.src = reader.result;

        image.style.width = '100%';
        image.style.height = '100%';

        preview.innerHTML = '';
        preview.appendChild(image);
      });

      reader.readAsDataURL(file);
    }
  });
}
function handleForm(param) {
    const form = document.querySelector('#form');
    const input = document.querySelector('#image-upload');
    let file;
  
    input.addEventListener('change', (e) => {
      e.preventDefault();
      file = input.files[0];
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      if (!file) {
        return;
      }
  
      const formData = new FormData(form);
      formData.delete('image');
      formData.delete('title');
      formData.delete('category');
      formData.append('image', file);
      formData.append('title', form.title.value);
      formData.append('category', form.category.value);
  
      if (validationForm(formData)) {
        POST(formData,param);
      }
    });
}
function validationForm(formData) {
    let formIsValid = true;
    formData.forEach((value, key) => {
      if (!value) {
        formIsValid = false;
      }
    });
  
    if (!formIsValid) {
      const form = document.querySelector('#form');
      const errorDiv = document.createElement('div');
      errorDiv.textContent = 'Veuillez remplir tous les champs.';
      form.appendChild(errorDiv);
      errorDiv.classList.add('error-message');
    }
  
    return formIsValid;
}


Initialisation(GET)
Button(Filter)
loginListener(loginHtml, loginForm,POSTLOGIN,makeHtmlModal)
  













