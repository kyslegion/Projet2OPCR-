    export function items(data) {
    let gallery = document.querySelector('.gallery');

    const all = document.getElementById('all');
    const objects = document.getElementById('objects');
    const flats = document.getElementById('flats');
    const hotels_and_restaurants = document.getElementById('hotels_and_restaurants');

    let objectsSet = new Set();
    let flatsSet = new Set();
    let hotelsAndRestaurantsSet = new Set();
    console.log(data);
    
    data.forEach(element => {
        if (element.category.name === "Objets") {

            objectsSet.add(element);
        } else if (element.category.name === "Appartements") {
            flatsSet.add(element);
        } else if (element.category.name === "Hotels & restaurants") {
            hotelsAndRestaurantsSet.add(element);
        }
    });
    let addedElements = [];
// window.addEventListener('load',()=>{
    all.addEventListener('click', () => {
        console.log('click all');
        // Ajouter tous les éléments à la galerie
        data.forEach(element => {
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
    });

    objects.addEventListener('click', () => {
        let gallery = document.querySelector('.gallery');
    
        objectsSet.forEach(element => {
            let elementIndex = addedElements.indexOf(element.title);
            if (elementIndex === -1) {
                let figure = document.createElement('figure');
                let img = document.createElement('img');
                let figcaption = document.createElement('figcaption');
    
                img.src = element.imageUrl;
                figcaption.innerHTML = element.title;
    
                figure.appendChild(img);
                figure.appendChild(figcaption);
                gallery.appendChild(figure);
    
                addedElements.push(element.title);
            }
        });
    });
    
    flats.addEventListener('click', () => {
        let gallery = document.querySelector('.gallery');
    
        flatsSet.forEach(element => {
            let elementIndex = addedElements.indexOf(element.title);
            if (elementIndex === -1) {
                let figure = document.createElement('figure');
                let img = document.createElement('img');
                let figcaption = document.createElement('figcaption');
    
                img.src = element.imageUrl;
                figcaption.innerHTML = element.title;
    
                figure.appendChild(img);
                figure.appendChild(figcaption);
                gallery.appendChild(figure);
    
                addedElements.push(element.title);
            }
        });
    });

    hotels_and_restaurants.addEventListener('click', () => {
        let gallery = document.querySelector('.gallery');
    
        hotelsAndRestaurantsSet.forEach(element => {
            let elementIndex = addedElements.indexOf(element.title);
            if (elementIndex === -1) {
                let figure = document.createElement('figure');
                let img = document.createElement('img');
                let figcaption = document.createElement('figcaption');
    
                img.src = element.imageUrl;
                figcaption.innerHTML = element.title;
    
                figure.appendChild(img);
                figure.appendChild(figcaption);
                gallery.appendChild(figure);
    
                addedElements.push(element.title);
            }
        });
    });
// })
    
}