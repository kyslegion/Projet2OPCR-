export function showFilteredProjects(data,filter){
    console.log("je suis dans le fichier showFilteredProjects.js");
        //ALL DATA IN ALL SET
        let allSet=new Set();
        data.forEach(element => {
            allSet.add(element);
        })
    
        // DATA FILTERED
        let newSet=new Set();
        allSet.forEach(element => {
            if (element.category.name==filter) {
                newSet.add(element);
            }
        })
        //ALL DATA BECOME DATA FILTERED
        allSet = newSet;
        console.log(allSet);
    
        //CREATE HTML ELEMENT 
        
        let gallery = document.querySelector('.gallery');
        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
          }
        // console.log(gallery.children.length,'gallery');
        allSet.forEach(element => {
            let figure = document.createElement('figure');
            let img = document.createElement('img');
            let figcaption = document.createElement('figcaption');
            img.src=element.imageUrl
            figcaption.innerHTML=element.title
            figure.appendChild(img);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);
            // Ajouter un élément à la galerie
        });
    
}
