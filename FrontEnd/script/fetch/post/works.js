import { tokenGet } from "./works/tokenGet.js";
import { fetchGetWorks } from "../get/works.js";
export function workPost(formData) {
  console.log(formData,"dans work");
  const tokenObj = tokenGet();
  const headers = { 'Authorization': 'Bearer ' + tokenObj.token }

  fetch("http://localhost:5678/api/works", {
    method: "POST",
    body: formData,
    headers: {
      ...headers
    }
  })
  .then((response) => {
    // console.log("dans then");
    let form=document.querySelector('#form')
    form.remove()
    
     return new Promise((resolve) => {
      fetchGetWorks().then((data) => {
        let container=document.querySelector('#container')

    let content = document.createElement("div");
    let ul = document.createElement("ul");
    
    // box_manager.id='box_manager';
    // dark_filter.id = "dark_filter";
    container.id = "container";
    content.id = "content";
    ul.className = "box_image";

    data.forEach((element) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let deletefile = document.createElement("input");
      deletefile.type = "button";
      deletefile.className = "deletefile";
      deletefile.value = "Effacer";
    
      li.setAttribute('id', element.id);
      img.src = element.imageUrl;
      li.className = "mini_img";
      li.appendChild(deletefile)
      li.appendChild(img);
      ul.appendChild(li);
    });

    let titre = document.createElement("div");
    titre.className = "titre";
    titre.innerHTML = "Galerie photo";
    let croix = document.createElement("div");
    croix.className = "croix";
    croix.innerHTML = "X";
    titre.appendChild(croix);
    let addProject = document.createElement("div");
    addProject.id = "addProject";
    addProject.innerHTML = `
    <button id='addPhoto'>Ajouter une photo</button>
    <button id='deleteGallery'>Supprimer la galerie</button>
    `;

    // Ajouter les éléments créés au body
    content.appendChild(ul);
    container.appendChild(titre);

    container.appendChild(content);
    container.appendChild(addProject);

    // box_manager.appendChild(dark_filter)
    // box_manager.appendChild(container)


    // body.appendChild(box_manager);
    resolve();
      })
     })
      
     
    

  })
  .catch((error) => {
    console.error(error, "on est dans modalListener");
  })
  .finally(() => {
    console.log("final");
    // return new Promise((resolve) => {
    //   fetchGetWorks().then((data) => {
        
    //     let box_image=document.querySelector('.box_image')
    //     data.forEach((element) => {
    //       let li = document.createElement("li");
    //       let img = document.createElement("img");
    //       let deletefile = document.createElement("input");
    //       deletefile.type = "button";
    //       deletefile.className = "deletefile";
    //       deletefile.value = "Effacer";
        
    //       li.setAttribute('id', element.id);
    //       img.src = element.imageUrl;
    //       li.className = "mini_img";
    //       li.appendChild(deletefile)
    //       li.appendChild(img);
    //       box_image.appendChild(li)
    //       // ul.appendChild(li);
    //     });
        
    //     resolve();
    //   });
    //   });
  });
}
