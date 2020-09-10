const toggle=document.getElementById("toggle");
const signUp=document.getElementById("open");
const modalContainer = document.getElementById("modal");
const closeForm=document.getElementById("close");





///Event listeners
toggle.addEventListener("click",showNavbar);
signUp.addEventListener("click",showForm);
closeForm.addEventListener("click",CloseForm);
window.addEventListener("click",(e)=>e.target===modalContainer? modalContainer.style.display="none":false)
///Functions


function showNavbar(){
    document.body.classList.toggle("show-navbar")
}

function showForm(){
    modalContainer.style.display="block"
}

function CloseForm(){
    modalContainer.style.display="none"
}