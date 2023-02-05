export function navBar(data) {
    console.log("je suis dans navBar");
    let projets=document.querySelector('#projets')
    let contact=document.querySelector('#contact')
    let login=document.querySelector('#login')

    login.addEventListener('click',()=>{
        let main=document.querySelector('main')
        console.log("je suis cliqué");
        // main.innerHTML = "";
        // let a=document.createElement('h1')
        // let b=document.createElement('form')
        // let c=document.createElement('label')
        // let d=document.createElement('input ')

        // a.innerHTML="Connexion";
        // b.id="email"
        // b.type="email"
        main.innerHTML=`<h1>Log in</h1>
        <form>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email">
          <br><br>
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" name="password">
          <br><br>
          <input type="submit" value="Se connecter">
          <br><br>
          <a href="#">Mot de passe oublié?</a>
        </form>`
        main.style=`
        display:flex;
        justify-content:center;
        flex-direction:column;
        `

    })
}