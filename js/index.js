const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

if(menuButton){
  menuButton.addEventListener('click', ()=>{
    navList.classList.toggle('open');
  })
}