const btn = document.querySelector('#humberger_btn');

btn.addEventListener('click',()=>{
    // Check if the btn is in state OPEN or CLOSE
    // btn.setAttribute('aria-modal',"true") 
    if (btn.classList.contains("menu_open")) {
        // Close the menu by removing or adding a class 
        // change the aria label
        btn.setAttribute('aria-label',"Fermer")
    } else {
        // Open the menu by removing or adding a class 
        // change aria label 
        btn.setAttribute('aria-label',"Ouvert")
    }
})