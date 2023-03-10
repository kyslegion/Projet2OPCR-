export function deleteGallery() {
    console.log("test");
}
export function deleteGalleryListener() {
    let deleteGallery=document.querySelector('#deleteGallery')
    deleteGallery.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log('click sur deleteGallery');
    })
}