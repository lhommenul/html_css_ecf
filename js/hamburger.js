const btn = document.querySelector('#hamburger_btn');
const nav = document.querySelector('.header_nav');

btn.addEventListener('click',()=>{
    // Check if the btn is in state OPEN or CLOSE
    // btn.setAttribute('aria-modal',"true") 
    if (btn.classList.contains("menu_open")) {
        console.log("close menu");
        // Close the menu by removing or adding a class 
        // change the aria label
        btn.setAttribute('aria-label',"Fermer")
        btn.classList.remove("menu_open")
        btn.textContent = "Menu"
        nav.classList.remove('header_nav_open')
    } else {
        console.log("open menu");
        btn.textContent = "Fermer"
        // Open the menu by removing or adding a class 
        // change aria label 
        btn.classList.add("menu_open")
        btn.setAttribute('aria-label',"Ouvert")
        nav.classList.add('header_nav_open')
    }
})