export function filter(){
    console.log("je suis filtre");
    let all =document.querySelector('.all');
    let objects=document.querySelector('.objects');
    let flats=document.querySelector('.flats');
    let hotels_and_restaurants=document.querySelector('.hotels_and_restaurants');

    window.addEventListener('load',()=>{
        all.addEventListener("click", function() {
            console.log("Click sur Tous");
        });
        
        objects.addEventListener("click", function() {
            console.log("Click sur Objets");
        });
        
          flats.addEventListener("click", function() {
            console.log("Click sur Appartements");
          });
        
          hotels_and_restaurants.addEventListener("click", function() {
            console.log("Click sur Hôtels & restaurants");
          });
    })
}