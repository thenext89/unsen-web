let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector('.menu');
let menuitem = document.querySelector('.menu-items');
let body = document.querySelector(".body-display");
menu.addEventListener("click",function(){
	// menu.classList.add("active")
    menuitem.classList.add('active')
    body.classList.add('active')
});
menuBtn.addEventListener("click",function(){
    menuitem.classList.remove('active')
    body.classList.remove('active')
});
body.addEventListener("click",function(){
    menuitem.classList.remove('active')
    body.classList.remove('active')
});
let submenu = document.querySelectorAll('.submenu-link');
let answer = document.querySelector('.answer');
for (i = 0; i < submenu.length; i++) {
    submenu[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }