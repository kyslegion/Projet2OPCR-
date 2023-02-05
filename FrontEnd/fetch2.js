
// export function fetch() {
    console.log("je suis fetch");
    const API_URL = "http://localhost:5678/api/works";
    
    fetch(API_URL)
    .then(response => {
        // console.log(response.headers);
        for (const [key, value] of response.headers) {
        //   console.log(key, value);
        }
        return response.json();
    })
    .then(response => response.json())
    // .then(result => {
        // let gallery = document.querySelector('.gallery');
    
        // const all = document.getElementById('all');
        // const objects = document.getElementById('objects');
        // const flats = document.getElementById('flats');
        // const hotels_and_restaurants = document.getElementById('hotels_and_restaurants');
    
        // let a=100
        // console.log(a,"depui fetch");
        // result.forEach(element => {
        //     let figure = document.createElement('figure');
        //     let img = document.createElement('img');
        //     let figcaption = document.createElement('figcaption');
        //     img.src=element.imageUrl
        //     figcaption.innerHTML=element.title
        //     figure.appendChild(img);
        //     figure.appendChild(figcaption);
        //     gallery.appendChild(figure);
        // });
        // console.log(result);
    // })
    .catch(error => {
        console.error(error);
    });
    
    // }
    
    
                