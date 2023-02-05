    export function filter(data) {
    let gallery = document.querySelector('.gallery');

    const all = document.getElementById('all');
    const objects = document.getElementById('objects');
    const flats = document.getElementById('flats');
    const hotels_and_restaurants = document.getElementById('hotels_and_restaurants');
    function firstLoadObject(params) {
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
            // Ajouter un élément à la galerie
        });
    }
    function AllObject(filter) {
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
    firstLoadObject()
   
        all.addEventListener('click', () => {
            firstLoadObject()
        });
    
        objects.addEventListener('click', () => {
            let filter="Objets"
            AllObject(filter)
        });
        
        flats.addEventListener('click', () => {
            let filter="Appartements"
            AllObject(filter)
        });
    
        hotels_and_restaurants.addEventListener('click', () => {
            let filter="Hotels & restaurants"
            AllObject(filter)
        });




    
}