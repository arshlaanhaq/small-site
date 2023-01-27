

alert(`hello buddy!!!
this site is made for display purpose only!   
Have Fun :)`);

let docTitle = document.title;
window.addEventListener("blur", ()=>{
    document.title ="Come back :(";
})
window.addEventListener("focus",()=>{
    document.title= docTitle;
})