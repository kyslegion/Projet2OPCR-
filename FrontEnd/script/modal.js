export function modal() {
    console.log("je suis dans modal");
    let box=document.querySelector('.box')

    box.addEventListener('click',()=>{
        console.log("box cliqué !");
        let body=document.querySelector('body')
        // let body=document.querySelector('body')
        let dark_filter=document.createElement('div')
        dark_filter.id="dark_filter"
        let container=document.createElement('div')
        container.id="container"
        let content=document.createElement('div')
        content.id="content"
        container.appendChild(content)
        body.appendChild(container)
        body.appendChild(dark_filter)


        

    })
}