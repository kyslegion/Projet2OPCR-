export function showAllProjects(data){
    // console.log("je suis dans le fichier showAllProjects.js");
        let allSet=new Set();
        data.forEach(element => {
            allSet.add(element);
        })
        let gallery = document.querySelector('.gallery');
        while (gallery.firstChild) {
            gallery.removeChild(gallery.firstChild);
        }
        allSet.forEach(element => {
            let figure = document.createElement('figure');
            let img = document.createElement('img');
            let figcaption = document.createElement('figcaption');
            img.src=element.imageUrl
            figcaption.innerHTML=element.title
            figure.appendChild(img);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);
        });
}
