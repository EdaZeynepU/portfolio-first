let prevScrollPos = window.scrollY;
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav-item')

function navbarMove(params) {
   
    const currentScrollPos = window.scrollY;
  
    if (prevScrollPos > currentScrollPos) {
      // Scrolling up
      navbar.classList.remove('hide');
    } else {
      // Scrolling down
      navbar.classList.add('hide');
    }
  
    prevScrollPos = currentScrollPos;
  
}

window.addEventListener('scroll',navbarMove);

navItems.forEach(element => {
  
  element.addEventListener('click',()=>{setTimeout(() => {navbarMove()}, 1500);})
});

$(document).ready(function(){
  $(".close").click(function(){
    $("#myAlert").alert("close");
  });
});