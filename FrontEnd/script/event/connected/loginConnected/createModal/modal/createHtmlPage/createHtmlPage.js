import { fetchGetWorks } from "../../../../../../fetch/get/works2.js";

export function createHtmlPage() {
  return new Promise((resolve) => {
  fetchGetWorks().then((data) => {
    console.log(data, "c'est data");
    localStorage.setItem('projects', JSON.stringify(data));
    let body = document.querySelector("body");

    let box_manager = document.createElement("box_manager");
    let dark_filter = document.createElement("div");
    let container = document.createElement("div");
    let content = document.createElement("div");
    let ul = document.createElement("ul");
    
    box_manager.id='box_manager';
    dark_filter.id = "dark_filter";
    container.id = "container";
    content.id = "content";
    ul.className = "box_image";
    

    data.forEach((element) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let deletefile = document.createElement("button");
      deletefile.className = "deletefile";
      deletefile.innerHTML = "Effacer";

      console.log(element.id,"lem");
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

    let form = document.createElement("form");
form.id = "form";
form.enctype = "multipart/form-data";
form.innerHTML = `
    <label for="image-upload" class="add_img">Ajouter une photo</label>
    <input id="image-upload" type="file" name="image" accept="image/*" style="display:none;" />
    <label for="title">Titre:</label>
    <input type="text" id="title" name="title">
    <label for="categoryId">Catégorie:</label>
    <input type="text" id="category" name="category">
    <button type="submit">Télécharger</button>`;


    // Ajouter les éléments créés au body
    content.appendChild(ul);
    container.appendChild(titre);
    container.appendChild(content);
    container.appendChild(form);
    // dark_filter.appendChild(container);

    box_manager.appendChild(dark_filter)
    box_manager.appendChild(container)


    body.appendChild(box_manager);
    // body.appendChild(container);
    resolve();
  });
  });
}
