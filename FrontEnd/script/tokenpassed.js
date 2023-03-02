// export function tokenpassed(savedToken) {
//     console.log(savedToken,'on est dans lenew');
    // console.log("je suis dans modal");
    // let box=document.querySelector('.edit')
    // // let fetching;
    
    // box.addEventListener('click',()=>{
    //   console.log(savedToken);
    //     console.log("click");
    //     fetchGet().then((données) => {
    //         // console.log(données,"ok");
            
    //         function createBoxModal(params) {
    //         // console.log("box cliqué !");
    //         let body=document.querySelector('body')

    //         let dark_filter=document.createElement('div')
    //         let container=document.createElement('div')
    //         let content=document.createElement('div')
    //         let ul=document.createElement('ul')

    //         dark_filter.id="dark_filter"
    //         container.id="container"
    //         content.id="content"
    //         ul.className='box_image'

    //             données.forEach(element => {
    //                 let li=document.createElement('li')
    //                 let img = document.createElement('img');
    //                 img.src=element.imageUrl
    //                 li.className="mini_img"
    //                 li.appendChild(img)
    //                 ul.appendChild(li)
    //             });
                

    //             let titre=document.createElement('div')
    //             titre.className="titre"
    //             titre.innerHTML="Galerie photo"
    //             let croix=document.createElement('div')
    //             croix.className="croix"
    //             croix.innerHTML="X"
    //             titre.appendChild(croix)

    //         let form=document.createElement('form')
    //         form.enctype = 'multipart/form-data';
    //         // form.innerHTML=`<label for="image-upload" class="add_img">Ajouter une photo</label>
    //         // <input id="image-upload" type="file" name="image" accept="image/*" style="display:none;" />
    //         // <button type="submit">Télécharger</button>`;
    //         form.innerHTML=`<label for="image-upload" class="add_img">Ajouter une photo</label>
    //         <input id="image-upload" type="file" name="image" accept="image/*" style="display:none;" />
    //         <button type="submit">Télécharger</button>`;
    //         form.addEventListener('submit',()=>{
    //             event.preventDefault();

    //             const formData = new FormData(form);
    //             const data = Object.fromEntries(formData);
    //             console.log(data);
    //             fetch("http://localhost:5678/", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //       'Authorization': `gwEtS=KfKfR^zxJP83ULiw`,
    //     },
    //   })
    //     .then((response) => {
    //       switch (response.status) {
    //         case 200:
    //           console.log("200");
    //           break;
    //         case 404:
    //           console.log("404");
    //           break;
            
    //         default:
    //           console.log("error");
    //           break;
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
                
                
                
                
                
    //         })
    //         content.appendChild(titre)
    //         content.appendChild(ul)
    //         content.appendChild(form)
    //         container.appendChild(content)
    //         body.appendChild(container)
    //         body.appendChild(dark_filter)
    
    
    //         }
    //         createBoxModal()
    //     });
        
        
        

    // })
// }
export function tokenpassed() {
    console.log("dans token");
        let body=document.querySelector('body')

        let dark_filter=document.createElement('div')
        let container=document.createElement('div')
        let content=document.createElement('div')
        let ul=document.createElement('ul')

        dark_filter.id="dark_filter"
        container.id="container"
        content.id="content"
        ul.className='box_image'

        données.forEach(element => {
                let li=document.createElement('li')
                let img = document.createElement('img');
                img.src=element.imageUrl
                li.className="mini_img"
                li.appendChild(img)
                ul.appendChild(li)
        });
            
        let titre=document.createElement('div')
        titre.className="titre"
        titre.innerHTML="Galerie photo"
        let croix=document.createElement('div')
        croix.className="croix"
        croix.innerHTML="X"
        titre.appendChild(croix)

        let form=document.createElement('form')
        form.enctype = 'multipart/form-data';
        // form.innerHTML=`<label for="image-upload" class="add_img">Ajouter une photo</label>
        // <input id="image-upload" type="file" name="image" accept="image/*" style="display:none;" />
        // <button type="submit">Télécharger</button>`;
        form.innerHTML=`<label for="image-upload" class="add_img">Ajouter une photo</label>
        <input id="image-upload" type="file" name="image" accept="image/*" style="display:none;" />
        <button type="submit">Télécharger</button>`;
        form.addEventListener('submit',()=>{
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        fetch("http://localhost:5678/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          'Authorization': `gwEtS=KfKfR^zxJP83ULiw`,
        },
    })
    .then((response) => {
      switch (response.status) {
        case 200:
          console.log("200");
          break;
        case 404:
          console.log("404");
          break;
        
        default:
          console.log("error");
          break;
      }
    })
    .catch((error) => {
      console.error(error);
    });   
})
    content.appendChild(titre)
    content.appendChild(ul)
    content.appendChild(form)
    container.appendChild(content)
    body.appendChild(container)
    body.appendChild(dark_filter)
}
