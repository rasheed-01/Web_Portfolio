const hamburgerbutton= document.getElementById("hamburger")
const navlist= document.getElementById("nav-List")

function togglebutton() {
    navlist.classList.toggle('show')
}

hamburgerbutton.addEventListener('click',togglebutton)